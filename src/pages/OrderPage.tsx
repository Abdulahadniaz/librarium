import React from "react";
import { useHistory } from "react-router-dom";
import { clear, remove, selectCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { placeOrder, selectOrders } from "../redux/orderSlice";

function OrderPage() {
  const orders = useAppSelector(selectOrders);
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
      <div>{orders.length} orders places</div>
      {orders.map((order) => (
        <div>
          <div>order id: {order.id}</div>
          {order.books.map((book) => (
            <div>
              <p>{book.title}</p>
              <p>{book.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderPage;
