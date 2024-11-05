import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProductBasket = () => {
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productBasket")) || []
  );
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));
  const [productPrice, setProductPrice] = useState(
    Array(products.length).fill(0)
  );

  useEffect(() => {
    if (products) {
      const totalPrice = products.reduce((total, product, index) => {
        return total + product.price * quantities[index];
      }, 0);
      console.log(totalPrice);

      setPrice();
    }
  }, [products]);

  function handleRemoveProduct(productId) {
    const product = products.filter((product) => {
      return product.id !== productId;
    });

    localStorage.setItem("productBasket", JSON.stringify(product));
    setProducts(product);
  }

  function increaseCount(index, product) {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    const finalPrice = product.price * newQuantities[index];
    setQuantities(newQuantities);
    setProductPrice(finalPrice);
  }

  function decreaseCount(index, product) {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      const finalPrice = product.price * newQuantities[index];
      setProductPrice(finalPrice);
      setQuantities(newQuantities);
    }
  }

  return (
    <div className="product-basket">
      {products.map((product, index) => (
        <div key={index} className="cart">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="basket-image"
            />
            <div className="basket-title">{product.title}</div>
          </Link>
          <div className="right-basket">
            <div className="basket-price">
              {quantities[index] === 1 ? product.price : productPrice} $
            </div>
            <button onClick={() => decreaseCount(index, product)}>-</button>
            <span>{quantities[index]}</span>
            <button onClick={() => increaseCount(index, product)}>+</button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      <p className="total-price">Total Price: {price} $</p>
    </div>
  );
};

export default ProductBasket;
