import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useProducts } from "../../Context/ProductContext";
import ProductList from "../../Components/ProductList/ProductList";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PaginatedProducts = ({ productsPerPage }) => {
  const { products } = useProducts();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + productsPerPage;

  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductList products={currentProducts} />
      <div className="pagination-container">
        <ReactPaginate
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          nextLabel={
            <ArrowForwardIosIcon style={{ fontSize: 18, width: 50 }} />
          }
          onPageChange={handlePageClick}
          pageCount={pageCount}
          pageClassName={"item pagination-page "}
          pageRangeDisplayed={2}
          previousClassName={"item previous"}
          previousLabel={
            <ArrowBackIosIcon style={{ fontSize: 18, width: 50 }} />
          }
        />
      </div>
    </>
  );
};

export default PaginatedProducts;
