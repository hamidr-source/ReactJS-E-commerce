import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";

const Search = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");

  function handleSearchProduct(event) {
    const serachQuery = event.target.value;
    setQuery(serachQuery);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(serachQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
  }

  return (
    <div className="search-box">
      <input
        placeholder="Search Here ..."
        value={query}
        onChange={handleSearchProduct}
      />
      <Link>
        <SearchIcon />
      </Link>
      <div className="complete-box">
        {filteredProducts.length > 0 && query ? (
          filteredProducts.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))
        ) : (
          <li>Product Not Found</li>
        )}
      </div>
    </div>
  );
};

export default Search;
