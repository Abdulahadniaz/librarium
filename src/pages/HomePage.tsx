import React, { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import NavBar from "../components/NavBar";
import { api, useDebounce, useLocalStorage } from "../util";
import "./HomePage.css";

const url = "https://61ea80297bc0550017bc67b8.mockapi.io/api/v1/books";

function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [titleFilter, setTitleFilter] = useLocalStorage("title", "");
  const debouncedTitle = useDebounce(titleFilter, 500);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchBooks = async (url: string) => {
    try {
      setIsLoading(true);
      const data = await api<Array<Book>>(url);
      setBooks(data);
      setIsLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const newUrl = new URL(url);
    newUrl.searchParams.set("title", titleFilter);
    console.log(titleFilter);
    fetchBooks(newUrl.href);
  }, [debouncedTitle]);

  return (
    <div>
      <NavBar />
      <input
        className="search-box"
        type="text"
        value={titleFilter}
        placeholder="Search by book title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      {errorMessage && <p>Failed to fetch books. Error: {errorMessage}</p>}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
