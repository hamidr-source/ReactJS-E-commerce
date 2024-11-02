import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";
import ResultBox from "./ResultBox";

const Search = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  function handleSearchProduct(event) {
    const serachQuery = event.target.value;
    setQuery(serachQuery);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(serachQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
  }
  function handleFocus() {
    setFocused(true);
  }
  function handleBlur() {
    setFocused(false);
  }

  return (
    <div className="search-box">
      <input
        placeholder="Search Here ..."
        value={query}
        onChange={handleSearchProduct}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Link>
        <SearchIcon />
      </Link>
      <div className="complete-box">
        {focused && (
          <div>
            {query === "" ? (
              <p>Just search anything you want</p>
            ) : filteredProducts.length > 0 ? (
              <div>
                {filteredProducts.map((product) => (
                  <ResultBox {...product} />
                ))}
              </div>
            ) : (
              <p>Product Not Found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
