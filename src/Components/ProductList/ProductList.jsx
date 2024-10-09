import React from "react";
import ProductDetail from "./ProductDetail";
import "./Products.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductDetail key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
