import React from "react";
import "./Product.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductDetail({ image, title, price, rating, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
          <img src={image} alt={title} className="product-image" />
        <div className="product-title">
          {title}
        </div>
        <div className="product-price">
          {price} $
        </div>
        <div className="product-rating">
        <Rating
              name="read-only"
              value={rating.rate}
              readOnly
              className="rating"
            />
        </div>
      </div>
    </Link>
  );
}
