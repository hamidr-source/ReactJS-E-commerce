import React from "react";
import { Typography } from "@mui/material";
import "./Product.css";
import { Link } from "react-router-dom";

export default function ProductDetail({ image, title, price }) {
  return (
    <Link to='/product'>
      <div className="product-card">
        <div>
          <img src={image} alt={title} className="product-image" />
        </div>
        <Typography component="div" className="product-title">
          {title}
        </Typography>
        <Typography component="div" className="product-price">
          {price}
        </Typography>
      </div>
    </Link>
  );
}
