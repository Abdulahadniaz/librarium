import React from "react";
import { useLocalStorage } from "../util";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  const [cart, setCart] = useLocalStorage<Array<Book>>("cart", []);

  function addToCart() {
    const found = cart.filter((b: Book) => b.id === book.id);
    console.log(found);
    if (found.length === 0) {
      const b = { ...book };
      const newCart = cart.slice();
      console.log(newCart.push(b));
      console.log(newCart);
      setCart(newCart);
    }
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.price}</p>
      <p>{book.publishedAt}</p>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
}

export default BookItem;
