import React from "react";
import "./Products.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useProducts } from "../../Context/ProductContext";

export default function ProductDetail({ image, title, price, rating, id }) {
  const { products } = useProducts();

  function handleAddProduct(productId) {
    const product = products.find((product) => {
      return product.id === productId;
    });

    const cart = JSON.parse(localStorage.getItem("productBasket"));
    if (cart) {
      cart.push(product);
      localStorage.setItem("productBasket", JSON.stringify(cart));
      alert("Prodcut add");
    } else {
      localStorage.setItem("productBasket", JSON.stringify([]));
      alert("Prodcut don't add");
    }
  }
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product-image" />
        <div className="product-title">{title}</div>
        <div className="product-rating">
          <Rating
            name="read-only"
            value={rating.rate}
            readOnly
            className="rating"
          />
        </div>
      </Link>
      <div className="product-price">
        {price} $
        <Button
          color="primary"
          variant="contained"
          sx={{ fontSize: 14 }}
          onClick={() => handleAddProduct(id)}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}
