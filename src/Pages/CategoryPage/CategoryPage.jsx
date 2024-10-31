import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../Components/ProductList/ProductList";

const CategoryPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${params.category
          .split(`-`)
          .join(` `)
          .toLowerCase()}`
      )
      .then((res) => setProducts(res.data));
  }, [params.category]);

  return (
    <div>
        <ProductList products={products} />
    </div>
  )
};

export default CategoryPage;
