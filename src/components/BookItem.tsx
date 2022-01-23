import React from "react";
import { add, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.price}</p>
      <p>{book.publishedAt}</p>
      <button onClick={() => dispatch(add(book))}>Add to Cart</button>
    </div>
  );
}

export default BookItem;
