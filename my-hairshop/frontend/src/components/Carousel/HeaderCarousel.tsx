import React from 'react';
import { ConfigProvider, Carousel } from 'antd';
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import './carousel.css';
const HeaderCarousel: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          arrowSize: 50,
        },
      },
    }}
  >
    <div className="header-carousel">
      <Carousel
        autoplay
        arrows
        infinite={false}
        waitForAnimate={false}
        draggable
        className="custom-carousel"
      >
        <div><img src={banner1} alt="banner 1" className="carousel-image" /></div>
        <div><img src={banner2} alt="banner 2" className="carousel-image" /></div>
        <div><img src={banner3} alt="banner 3" className="carousel-image" /></div>
      </Carousel>
    </div>
  </ConfigProvider>
);

export default HeaderCarousel;
