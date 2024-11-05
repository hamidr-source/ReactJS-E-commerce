import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import "./Product.css";
import { useProducts } from "../../Context/ProductContext";

const Product = () => {
  const [product, setProdct] = useState([]);
  const params = useParams();
  const {handleAddProductInBasket} = useProducts()

  function handleAddProduct(product) {
    handleAddProductInBasket(product)
  }

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/${params.id}`,
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((response) => setProdct(response.data));
  }, [params.id]);

  return (
    <div className="product-container">
      <img
        src={product.image}
        alt={product.title}
        className="product-item-img"
      />
      <p className="product-item-title">{product.title}</p>
      <div className="product-detail">
        <Rating
          name="read-only"
          value={product.rating?.rate ?? 5}
          readOnly
          className="product-item-rating"
        />
        <p className="product-item-count">Quantity: {product.rating?.count}</p>
        <p className="product-item-price">
          {product.price} $
          <Button
            color="primary"
            variant="contained"
            sx={{ fontSize: 18 }}
            onClick={() => handleAddProduct(product)}
          >
            Buy
          </Button>
        </p>
      </div>
      <p className="product-item-desc">{product.description}</p>
    </div>
  );
};

export default Product;
