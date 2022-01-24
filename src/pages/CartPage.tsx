import React from "react";
import NavBar from "../components/NavBar";
import { clear, remove, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { placeOrder } from "../redux/orderSlice";
import "./CartPage.css";

function CartPage() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  function calculatePrice(cart: Book[]): number {
    let sum = 0;
    cart.forEach((book) => {
      sum = +book.price + +sum;
    });
    return sum;
  }

  return (
    <div>
      <NavBar />
      <div className="cart-length">
        Cart: <b>{cart.length} items</b>
      </div>
      {cart.map((book) => (
        // TODO: MAKE THIS A COMPONENT
        <div key={book.id} className="cart-card">
          <div className="cart-container">
            <p>
              <b>Book Title: </b>
              <i>{book.title}</i>
            </p>
            <p>
              <b>Price: </b>${book.price}
            </p>
            <button
              className="button-17"
              onClick={() => dispatch(remove(book.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-length">
        Total Value of the Cart:
        <i> ${calculatePrice(cart)}</i>
      </div>
      <div className="checkout">
        {/* TODO: show total price */}
        <button
          className="button-17"
          onClick={() => {
            const order: Order = {
              id: Math.floor(1 + Math.random() * 100000),
              books: cart,
              amount: calculatePrice(cart),
            };
            dispatch(placeOrder(order));
            dispatch(clear());
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
