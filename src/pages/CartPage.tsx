import React from "react";
import { useHistory } from "react-router-dom";
import { remove, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

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
        </ul>
      </nav>
      <div>Cart: {cart.length} items</div>
      {cart.map((book) => (
        // TODO: MAKE THIS A COMPONENT
        <div key={book.id}>
          <div>{book.title}</div>
          <button onClick={() => dispatch(remove(book.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
