import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../Components/ProductList/ProductList";

const SearchResult = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };

  console.log(products);
  return (
    <div className="result-page">
      <ProductList products={products} />
    </div>
  );
};

export default SearchResult;
