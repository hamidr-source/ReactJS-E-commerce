import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";

const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleAddProductInBasket = (item) => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = storedItems.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      storedItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(storedItems));
    alert("Product Added");
  };

  useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/products",
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products);

  return (
    <ProductContext.Provider value={{ products, handleAddProductInBasket }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
