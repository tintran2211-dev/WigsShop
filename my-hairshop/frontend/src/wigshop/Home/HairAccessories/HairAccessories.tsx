import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.css";


const HairAccessories: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });


const accessories = [
    {
      name: "Kẹp tóc ngọc trai",
      image: "https://example.com/keptoc1.jpg",
      price: 49000,
    },
    {
      name: "Cài tóc hoa ren",
      image: "https://example.com/caitoc1.jpg",
      price: 69000,
    },
    {
      name: "Băng đô vải lụa",
      image: "https://example.com/bangdo1.jpg",
      price: 39000,
    },
    {
      name: "Thun buộc tóc vintage",
      image: "https://example.com/thun1.jpg",
      price: 29000,
    },
    {
      name: "Kẹp tóc Hàn Quốc",
      image: "https://example.com/keptoc2.jpg",
      price: 59000,
    },
    {
        name: "Băng đô vải lụa",
        image: "https://example.com/bangdo1.jpg",
        price: 39000,
      },
      {
        name: "Thun buộc tóc vintage",
        image: "https://example.com/thun1.jpg",
        price: 29000,
      },
      {
        name: "Kẹp tóc Hàn Quốc",
        image: "https://example.com/keptoc2.jpg",
        price: 59000,
      },
      {
        name: "Băng đô vải lụa",
        image: "https://example.com/bangdo1.jpg",
        price: 39000,
      },
      {
        name: "Thun buộc tóc vintage",
        image: "https://example.com/thun1.jpg",
        price: 29000,
      },
      {
        name: "Kẹp tóc Hàn Quốc",
        image: "https://example.com/keptoc2.jpg",
        price: 59000,
      },
      {
        name: "Kẹp tóc Hàn Quốc",
        image: "https://example.com/keptoc2.jpg",
        price: 59000,
      },
  ];

  return (
    <section className="accessory-section">
      <h2 className="section-title">Phụ kiện tóc</h2>

      {isMobile ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {accessories.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="accessory-card">
                <img src={item.image} alt={item.name} className="accessory-img" />
                <div className="accessory-info">
                  <p className="accessory-name">{item.name}</p>
                  <p className="accessory-price">{item.price.toLocaleString()}đ</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="accessory-grid">
          {accessories.map((item, idx) => (
            <div key={idx} className="accessory-card">
              <img src={item.image} alt={item.name} className="accessory-img" />
              <div className="accessory-info">
                <p className="accessory-name">{item.name}</p>
                <p className="accessory-price">{item.price.toLocaleString()}đ</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HairAccessories;
