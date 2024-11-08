import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PaginatedProducts from "./Pagination";
import Footer from "../../Components/Footer/Footer";
import SliderCard from "./SliderCard";
import "./HomePage.css"
import Search from "../../Components/SearchBox/Search";
import Category from "../../Components/Category/Category"

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Category />
      <Search />
      <div className="home-slide">
        <SliderCard />
      </div>      
        <PaginatedProducts productsPerPage={8} />
      <Footer />
    </div>
  );
};

export default HomePage;
