import React from "react";
import { useLocalStorage } from "../util";

function CartPage() {
  const [cart, setCart] = useLocalStorage<Array<Book>>("cart", []);

  return (
    <div>
      <p>Cart: {cart.length} items</p>
      {cart.map((book: Book) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
}

export default CartPage;
