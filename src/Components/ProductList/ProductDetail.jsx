import React from "react";
import "./Products.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useProducts } from "../../Context/ProductContext";

export default function ProductDetail({ image, title, price, rating, id }) {
  const { products, handleAddProductInBasket } = useProducts();
  const displayTitle =
    title.split(" ").length < 8
      ? title
      : title.split(" ").slice(0, 7).join(" ") + " ...";

  function handleAddProduct(productId) {
    const product = products.find((product) => {
      return product.id === productId;
    });

    handleAddProductInBasket(product);
  }

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={displayTitle} className="product-image" />
        <div className="product-title">{displayTitle}</div>
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
