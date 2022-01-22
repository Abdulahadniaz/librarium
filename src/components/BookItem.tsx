import React from "react";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.price}</p>
      <p>{book.publishedAt}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookItem;
