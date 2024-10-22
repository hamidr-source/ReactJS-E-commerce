import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";

const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState("");

  function handleAddProductInBasket (product) {
    const cart = JSON.parse(localStorage.getItem("productBasket"));
    if (cart) {
      cart.push(product);
      localStorage.setItem("productBasket", JSON.stringify(cart));
      alert("Prodcut add")
    } else {
      localStorage.setItem("productBasket", JSON.stringify([]));
      alert("Prodcut don't add")
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/products",
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((res) => setProducts(res.data));

    axios
      .get(
        "https://fakestoreapi.com/users",
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, users, handleAddProductInBasket }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
