import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import ProductProvider from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
