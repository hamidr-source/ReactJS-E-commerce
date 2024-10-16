import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { useProducts } from "../../Context/ProductContext";
import "./Product.css";

const Product = () => {
  const [product, setProdct] = useState([]);
  const { products, addProductsToLocalStorage } = useProducts();
  const params = useParams();
  
  function handleAddProduct(productId) {
    const currentProduct = products.find((product) => {
      return product.id === productId
    })
    
    console.log(currentProduct)
    addProductsToLocalStorage(currentProduct)
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
            sx={{ fontSize: 16 }}
            onClick={() => handleAddProduct(product.id)}
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
