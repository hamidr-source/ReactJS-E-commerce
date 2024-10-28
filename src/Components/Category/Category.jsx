import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Category.css";
import { useProducts } from "../../Context/ProductContext";

const Category = () => {
  const { products } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([])

    useEffect(() => {
     const categoriesSet = new Set()

     products.forEach(product => {
      categoriesSet.add(product.category)
     });

     setCategories([...categoriesSet])
    }, [products])

  function handleOpenCategorySection() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="category" onClick={handleOpenCategorySection}>
      Category <KeyboardArrowDownIcon />
      <div className={isOpen ? "category-box open" : "category-box close"}>
        {categories.map((category, index) => (
          <p className="categories" key={index}>{category}</p>
        ))}
      </div>
    </div>
  );
};

export default Category;
