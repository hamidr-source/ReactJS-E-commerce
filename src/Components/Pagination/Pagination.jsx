import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { useProducts } from "../../Context/ProductContext";
import ProductList from "../ProductList/ProductList";

export default function Paginatedproducts({ productsPerPage }) {
    const { products } = useProducts();
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching products from another resources.
    // (This could be products from props; or products loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + productsPerPage;
    console.log(`Loading products from ${itemOffset} to ${endOffset}`);
    const currentProducts = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / productsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * productsPerPage) % products.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ProductList products={currentProducts} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  