import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import ProductProvider from "./Context/ProductContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
