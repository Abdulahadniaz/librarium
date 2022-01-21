import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./fetch";
import Book from "./book";

const url = "https://61ea80297bc0550017bc67b8.mockapi.io/api/v1/books";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks(url: string) {
      try {
        const data = await api<Array<Book>>(url);
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks(url);
  }, []);
  
  return (
    <div>
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
