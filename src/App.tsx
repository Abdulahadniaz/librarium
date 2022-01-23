import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route path="/cart" component={CartPage}></Route>
      <Route path="/orders" component={OrderPage}></Route>
    </Switch>
  );
}

export default App;
