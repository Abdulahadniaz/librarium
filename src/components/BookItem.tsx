import React from "react";
import { add, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./BookItem.css";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <div className="container">
        <p>
          <b>Book Title: </b>
          <i>{book.title}</i>
        </p>
        <p>
          <b>Author: </b>
          <i>{book.author}</i>
        </p>
        <p>
          <b>Price: </b>${book.price}
        </p>
        <p>
          <b>Published At: </b>
          <i>{book.publishedAt.split("T")[0]}</i>
        </p>
        <button className="button-17" onClick={() => dispatch(add(book))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookItem;
