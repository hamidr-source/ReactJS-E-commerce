import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/products",
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      ?.then((res) => setProducts(res.data));
  }, []);

  console.log(products)
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
