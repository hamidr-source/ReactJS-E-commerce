import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import "./Product.css";

const Product = () => {
  const [product, setProdct] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/${params.id}`,
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((response) => setProdct(response.data));
  }, []);

  return (
    <div className="product-container">
      <img
        src={product.image}
        alt={product.title}
        className="product-item-img"
      />
      <p className="product-item-title">{product.title}</p>
      <div className="product-detail">
        <p className="product-item-price">{product.price} $</p>
        <Rating
          name="read-only"
          value={product.rating?.rate ?? 5}
          readOnly
          className="product-item-rating"
        />
        <p className="product-item-count">Quantity: {product.rating?.count}</p>
      </div>
      <p className="product-item-desc">{product.description}</p>
    </div>
  );
};

export default Product;
