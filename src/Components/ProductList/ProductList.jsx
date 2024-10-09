import React from "react";
import { useProducts } from "../../Context/ProductContext";
import ProductDetail from "./ProductDetail";
import "./Product.css";

const ProductList = ({products}) => {

  console.log(products);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductDetail key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
