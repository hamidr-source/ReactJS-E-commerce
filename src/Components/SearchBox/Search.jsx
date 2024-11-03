import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useProducts } from "../../Context/ProductContext";
import ResultBox from "./ResultBox";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [productLimit, setProductLimit] = useState([]);
  const navigate = useNavigate();

  function handleSearchProduct(event) {
    const serachQuery = event.target.value;
    setQuery(serachQuery);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(serachQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
    if (filteredProducts.length > 6) {
      setProductLimit(filteredProducts.slice(0, 6));
    } else {
      setProductLimit(filteredProducts);
    }
  }

  function handleNavigateToResultPage() {
    navigate("/searchResult", {state: filteredProducts})
  }

  return (
    <div className="search-box">
      <div className="search-input">
        <input
          placeholder="Search Here ..."
          value={query}
          onChange={handleSearchProduct}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <SearchIcon />
      </div>

      <div className={focused ? "result-box-open" : "result-box-close"}>
        {focused && (
          <div>
            {query === "" ? (
              <p>Just search anything you want</p>
            ) : filteredProducts.length > 0 ? (
              <div>
                {productLimit.map((product) => (
                  <ResultBox {...product} key={product.id} />
                ))}

                <button
                  className={
                    filteredProducts.length > 6 ? "result-product-btn" : "close"
                  }
                  onMouseDown={() =>
                    handleNavigateToResultPage()
                  }
                >
                  See more ...
                </button>
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
