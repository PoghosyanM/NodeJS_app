import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header.component";
import AddProduct from "./components/add-product/add-product.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <AddProduct />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
