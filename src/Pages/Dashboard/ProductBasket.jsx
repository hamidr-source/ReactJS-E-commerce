// src/ShoppingCart.js
import React, { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const updateQuantity = (id, value) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + value };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <span> Price {item.price} $</span>
              <span> Quantity {item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>افزودن</button>
              <button onClick={() => updateQuantity(item.id, -1)}>کاهش</button>
              <button onClick={() => handleRemoveItem(item.id)}>حذف</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: {totalPrice} $</h3>
    </div>
  );
};

export default ShoppingCart;
