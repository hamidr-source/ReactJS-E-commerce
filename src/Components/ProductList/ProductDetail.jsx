import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function ProductDetail({ image, title, price }) {
  return (
    <Link to='/product'>
      <div className="product-card">
          <img src={image} alt={title} className="product-image" />
        <div className="product-title">
          {title}
        </div>
        <div className="product-price">
          {price}
        </div>
      </div>
    </Link>
  );
}
