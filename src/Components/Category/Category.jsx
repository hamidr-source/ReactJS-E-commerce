import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Category.css";
import { useProducts } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

const Category = () => {
  const { products } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesSet = new Set();

    products.forEach((product) => {
      categoriesSet.add(product.category);
    });

    setCategories([...categoriesSet]);
  }, [products]);

  return (
    <div className="category">
      <div className="select" onClick={() => setIsOpen(!isOpen)}>
        <span>Category</span>
        <span>
          {isOpen ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </div>
      <div className={isOpen ? "category-box open" : "category-box close"}>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.split(` `).join(`-`).toLowerCase()}`}
          >
            <p className="categories">{category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
