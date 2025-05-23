import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Services from "./Services/Services";
import HairAccessories from "./HairAccessories/HairAccessories";

const Home: React.FC = () => {

  return (
      <>
      <ProductCatalog />
      <FeaturedProducts />
      <HairAccessories />
      <Services />
      </>
  );
};

export default Home;
