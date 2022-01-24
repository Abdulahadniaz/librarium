import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import Page404 from "./pages/Page404";
import { trackPromise } from "react-promise-tracker";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route path="/cart" component={CartPage}></Route>
      <Route path="/orders" component={OrderPage}></Route>
      <Route component={Page404} />
    </Switch>
  );
}

export default App;
