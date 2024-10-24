import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import ProductProvider from "./Context/ProductContext";
import { CookiesProvider } from "react-cookie";
import UserProvider from "./Context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </CookiesProvider>
  </React.StrictMode>
);
