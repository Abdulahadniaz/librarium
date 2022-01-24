import React from "react";
import { useHistory } from "react-router-dom";
import { selectCart } from "../redux/cartSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import "./NavBar.css";

function NavBar() {
  const cart = useAppSelector(selectCart);
  const history = useHistory();

  return (
    <div>
      <nav className="navMenu">
        <a onClick={() => history.push("/")}>Home</a>
        <a onClick={() => history.push("/cart")}>Cart({cart.length})</a>
        <a onClick={() => history.push("/orders")}>Orders</a>
        <div className="dot"></div>
      </nav>
    </div>
  );
}

export default NavBar;
