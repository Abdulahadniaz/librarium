import React from "react";
import { useHistory } from "react-router-dom";
import { clear, remove, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { placeOrder } from "../redux/orderSlice";

function CartPage() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => history.push("/")}>Home</li>
          <li onClick={() => history.push("/cart")}>Cart</li>
          <li onClick={() => history.push("/orders")}>Orders</li>
        </ul>
      </nav>
      <div>Cart: {cart.length} items</div>
      {cart.map((book) => (
        // TODO: MAKE THIS A COMPONENT
        <div key={book.id}>
          <div>
            {book.title}
            <button onClick={() => dispatch(remove(book.id))}>Remove</button>
          </div>
        </div>
      ))}
      {/* TODO: show total price */}
      <button
        onClick={() => {
          const order: Order = { id: Math.random(), books: cart };
          dispatch(placeOrder(order));
          dispatch(clear());
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartPage;
