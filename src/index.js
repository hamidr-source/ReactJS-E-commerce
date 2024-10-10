import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import ProductProvider from "./Context/ProductContext";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CookiesProvider>
  </React.StrictMode>
);
