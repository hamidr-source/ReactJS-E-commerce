import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useProducts } from "../../Context/ProductContext";

const SliderCard = () => {
  const { products } = useProducts();
  const slideProducts = products.slice(0, 5);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <Slider {...settings}>
      {slideProducts.map((value, index) => (
        <div className="slide-card" key={index}>
          <div className="left-slide-side">
            <img src={value.image} alt={value.title} />
          </div>
          <div className="right-slide-side">
            <p>{value.title}</p>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;
