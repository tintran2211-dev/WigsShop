import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productItems = [
  { label: "Tóc mái siêu da", img: "https://placehold.co/200x200?text=1" },
  { label: "Tóc nguyên đầu", img: "https://placehold.co/200x200?text=2" },
  { label: "Tóc mái giả", img: "https://placehold.co/200x200?text=3" },
  { label: "Tóc thật nối", img: "https://placehold.co/200x200?text=4" },
  { label: "Phụ kiện tóc", img: "https://placehold.co/200x200?text=5" },
];

const ProductCatalog: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default: 3
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, // Tablet
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480, // Mobile
            settings: {
              slidesToShow: 3, // vẫn hiển thị 3 cái dù màn nhỏ
            },
          },
        ],
      };

  return (
    <div className="home-container">
      <h2 className="category-title">Danh mục sản phẩm</h2>

      {/* Desktop: Hiển thị lưới */}
      <div className="product-grid desktop-only">
        {productItems.map((item, index) => (
          <div key={index} className="product-item">
            <div className="image-wrapper">
              <Image
                src={item.img}
                preview={false}
                alt={item.label}
                className="round-image"
              />
            </div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="mobile-only">
        <Slider {...settings} className="carousel-container">
          {productItems.map((item, index) => (
            <div key={index} className="product-item">
              <div className="image-wrapper">
                <Image
                  src={item.img}
                  preview={false}
                  alt={item.label}
                  className="round-image"
                />
              </div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCatalog;
