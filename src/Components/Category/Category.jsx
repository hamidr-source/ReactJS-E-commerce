import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Category.css";
import { useProducts } from "../../Context/ProductContext";

const Category = () => {
  const { products } = useProducts();
  const [isOpen, setIsOpen] = useState(false)
  function handleOpenCategorySection() {
    setIsOpen(!isOpen)
    products.map((product) => {
        console.log(product.category)
    })
  }
  return (
    <div className="category" onClick={handleOpenCategorySection}>
      Category <KeyboardArrowDownIcon />
      <div className={isOpen ? "category-box open" : "category-box close"}>
        <span>men's clothing</span>
        <span>jewelery</span>
        <span>electronics</span>
        <span>women's clothing</span>
      </div>
    </div>
  );
};

export default Category;
