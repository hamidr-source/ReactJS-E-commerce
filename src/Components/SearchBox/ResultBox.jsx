import React from "react";
import { useNavigate } from "react-router-dom";

const ResultBox = ({ title, id, image }) => {
  const navigate = useNavigate();
  const displayTitle =
  title.split(" ").length < 9
    ? title
    : title.split(" ").slice(0, 8).join(" ") + " ..."

  function handleProductClick(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <ul>
      <li onMouseDown={() => handleProductClick(id)}>
        <img src={image} alt={displayTitle} />
        {displayTitle}
      </li>
    </ul>
  );
};

export default ResultBox;
