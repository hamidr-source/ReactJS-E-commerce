import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ProductProvider from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
);
