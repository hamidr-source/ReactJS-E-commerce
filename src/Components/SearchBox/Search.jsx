import React, { useState, useEffect } from "react";
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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isModalOPen, setIsModalOPen] = useState(false);
  const [productLimit, setProductLimit] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkWindowSize = () => {
      const width = window.innerWidth;
      const maxWidth = 426;

      if (width > maxWidth) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  function handleSearchProduct(event) {
    const serachQuery = event.target.value;
    setQuery(serachQuery);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(serachQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
    if (filteredProducts.length > 6) {
      setProductLimit(filteredProducts.slice(0, 4));
    } else {
      setProductLimit(filteredProducts);
    }
  }

  function handleLoadMore() {
    navigate("/searchResult", { state: { products: filteredProducts } });
  }

  function handleCloseModal() {
    setIsModalOPen(false);
    setFocused(false);
    document.body.style.overflow = 'auto';
  }

  function handleOpenModal() {
    setIsModalOPen(true);
    setFocused(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className={mobileMenu ? "search-box" : "mobile-search-box"}>
      {mobileMenu ? (
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
      ) : (
        <SearchIcon onClick={handleOpenModal} />
      )}

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
                  onMouseDown={() => handleLoadMore()}
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
      {isModalOPen && (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <input type="text" value={query} onChange={handleSearchProduct} />
            <button onClick={handleCloseModal}>Close</button>
            <div className="search-results">
              <div>
                {query === "" ? (
                  <p>Just search anything you want</p>
                ) : filteredProducts.length > 0 ? (
                  <div>
                    {filteredProducts.map((product) => (
                      <ResultBox {...product} key={product.id} />
                    ))}
                  </div>
                ) : (
                  <p>Product Not Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
