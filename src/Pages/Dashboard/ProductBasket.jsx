import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const ProductBasket = () => {
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productBasket")) || []
  );

  useEffect(() => {
    if (products) {
      let totalPrice = products.map((element) => {
        return element.price;
      });
      let sum = totalPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      setPrice(Math.round(sum));
    }
  }, [products]);

  function handleRemoveProduct(productId) {
    const product = products.filter((product) => {
      return product.id !== productId;
    });

    localStorage.setItem("productBasket", JSON.stringify(product));
    setProducts(product);
  }

  return (
    <div className="product-basket">
      {products.map((product, index) => (
        <div key={index} className="cart">
          <img
            src={product.image}
            alt={product.title}
            className="basket-image"
          />
          <div className="basket-title">{product.title}</div>
          <div className="right-basket">
            <div className="basket-price">{product.price} $</div>
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
