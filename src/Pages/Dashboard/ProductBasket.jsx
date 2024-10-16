import React from "react";

const ProductBasket = () => {
  const localStorageData = JSON.parse(localStorage.getItem("productBasket"));
  console.log(localStorageData);

  let totalPrice = localStorageData.map((element) => {
    return element.price;
  });
  
  let sum = totalPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="product-basket">
      {localStorageData.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.title} className="image" />
          <div className="basket-title">{product.title}</div>
          <div className="basket-price">{product.price} $</div>
        </div>
      ))}

      <p>{sum} $</p>
    </div>
  );
};

export default ProductBasket;
