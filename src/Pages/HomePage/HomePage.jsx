import React from "react";
import Navbar from "./Navbar";
import ProductList from "../../Components/ProductList/ProductList";
import Paginatedproducts from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";
import SliderCard from "./SliderCard";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-slide">
        <SliderCard />
      </div>
      {/* <ProductList /> */}
      <div className="pagination">
        <Paginatedproducts productsPerPage={10} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
