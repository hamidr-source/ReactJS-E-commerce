import React, { useEffect, useState } from "react";

const ProductBasket = () => {
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("productBasket"));
    if (localStorageData) {
      let totalPrice = localStorageData.map((element) => {
        return element.price;
      });
      let sum = totalPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      setProducts(localStorageData);
      setPrice(sum);
    }
  }, []);

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
          </div>
        </div>
      ))}

      <p className="total-price">Total Price: {price} $</p>
    </div>
  );
};

export default ProductBasket;
