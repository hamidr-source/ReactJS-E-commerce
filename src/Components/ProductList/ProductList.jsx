import React from "react";
import { useProducts } from "../../Context/ProductContext";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const { products } = useProducts();

  console.log(products)

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductDetail key={index} {...product} />
      ))}

    </div>
  )
};

export default ProductList;
