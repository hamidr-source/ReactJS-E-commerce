import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";

const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState("");

  function addProductsToLocalStorage (product) {
    const getProducts = localStorage.getItem("productBasket")
    if (getProducts) {
      localStorage.setItem("productBasket",  [getProducts, JSON.stringify(product)]);
    } else {
      localStorage.setItem("productBasket",  JSON.stringify(product));
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
    <ProductContext.Provider value={{ products, users, addProductsToLocalStorage }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
