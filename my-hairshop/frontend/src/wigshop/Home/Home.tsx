import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

const Home: React.FC = () => {

  return (
      <>
      <ProductCatalog />
      <FeaturedProducts />
      </>
  );
};

export default Home;
