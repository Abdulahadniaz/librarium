import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookItem from "../components/BookItem";
import { api, useDebounce, useLocalStorage } from "../util";

const url = "https://61ea80297bc0550017bc67b8.mockapi.io/api/v1/books";

function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [titleFilter, setTitleFilter] = useLocalStorage("title", "");
  const debouncedTitle = useDebounce(titleFilter, 500);
  const history = useHistory();

  const fetchBooks = async (url: string) => {
    try {
      const data = await api<Array<Book>>(url);
      setBooks(data);
    } catch (error) {
      console.log(error);
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
      {/* TODO: make this a component */}
      <nav>
        <ul>
          <li onClick={() => history.push("/")}>Home</li>
          <li onClick={() => history.push("/cart")}>Cart</li>
          <li onClick={() => history.push("/orders")}>Orders</li>
        </ul>
      </nav>
      <input
        type="text"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <div>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
