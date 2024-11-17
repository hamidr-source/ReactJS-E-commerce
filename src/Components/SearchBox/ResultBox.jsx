import React from "react";
import { useNavigate } from "react-router-dom";

const ResultBox = ({ title, id, image }) => {
  const navigate = useNavigate();
  const displayTitle =
  title.split(" ").length < 9
    ? title
    : title.split(" ").slice(0, 8).join(" ") + " ..."

  function handleProductClick(productId) {
    document.body.style.overflow = 'auto';
    navigate(`/product/${productId}`);
  }

  return (
    <ul>
      <li onMouseDown={() => handleProductClick(id)} className="result-product">
        <img src={image} alt={displayTitle} className="result-product-image" />
        <p className="result-product-title">{displayTitle}</p>
      </li>
    </ul>
  );
};

export default ResultBox;
