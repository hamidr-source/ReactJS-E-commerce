import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const ProductBasket = () => {
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

  const roundedPrice = totalPrice.toFixed(2);

  return (
    <div className="product-basket">
      {cartItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} className="basket-image" />
              <span className="basket-title">{item.title}</span>
            </Link>
            <div className="right-basket">
              <span> Price {item.price} $</span>
              <Button onClick={() => updateQuantity(item.id, 1)}>
                <AddIcon />
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={() => updateQuantity(item.id, -1)}>
                <RemoveIcon />
              </Button>
              <Button onClick={() => handleRemoveItem(item.id)} color="error">
                Remove
              </Button>
            </div>
          </div>
        ))
      )}
      <h3>Total Price: {roundedPrice} $</h3>
    </div>
  );
};

export default ProductBasket;
