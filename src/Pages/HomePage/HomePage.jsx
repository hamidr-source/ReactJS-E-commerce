import React from "react";
import Navbar from "./Navbar";
import ProductList from "../../Components/ProductList/ProductList";
import Footer from "../../Components/Footer/Footer";
import SliderCard from "./SliderCard";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <SliderCard />
      <ProductList />
      <Footer />
    </div>
  );
};

export default HomePage;
