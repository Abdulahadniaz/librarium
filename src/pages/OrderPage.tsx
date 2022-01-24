import React from "react";
import NavBar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { placeOrder, selectOrders } from "../redux/orderSlice";
import "./OrderPage.css";

function OrderPage() {
  const orders = useAppSelector(selectOrders);

  return (
    <div>
      <NavBar />
      <div className="order-box">
        <b>{orders.length}</b> orders placed
      </div>
      {orders.map((order) => (
        <div>
          <div>
            <b>order id: </b>
            {order.id}
          </div>
          <div className="order-block">
            {order.books.map((book) => (
              <div key={book.id} className="order-card">
                <div className="order-container">
                  <p>
                    <b>Book Title: </b>
                    <i>{book.title}</i>
                  </p>
                  <p>
                    <b>Price: </b>${book.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-value">
            <h3>Order Amount: ${order.amount}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderPage;
