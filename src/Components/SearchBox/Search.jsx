import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";

const Search = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  function handleSearchProduct(event) {
    const serachQuery = event.target.value;
    setQuery(serachQuery);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(serachQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleProductClick(productId, event) {
    event.stopPropagation()
    console.log(event.isPropagationStopped());
    navigate(`/product/${productId}`);
  }

  function handleBlur() {
    setFocus(false);
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
        {focus && (
          <div>
            {query === "" ? (
              <p>Just search everything you want</p>
            ) : filteredProducts.length > 0 ? (
              <ul>
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    onMouseDown={(event) => handleProductClick(product.id, event)}
                  >
                    {product.title}
                  </li>
                ))}
              </ul>
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
