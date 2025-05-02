import React from "react";
import { Carousel, ConfigProvider } from "antd";

const FeaturedProducts: React.FC = () => {
  const featuredProducts = [
    {
      name: "NGUYÊN ĐẦU BOB JOHNY DEPP (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_1",
      oldPrice: 13000000,
      newPrice: 10000000,
      discount: 23,
    },
    {
      name: "NGUYÊN ĐẦU SIÊU DA NAM (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_2",
      oldPrice: 7000000,
      newPrice: 5500000,
      discount: 21,
    },
    {
      name: "NGUYÊN ĐẦU XINH ĐẸP (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_3",
      oldPrice: 12000000,
      newPrice: 9000000,
      discount: 25,
    },
    {
      name: "NGUYÊN ĐẦU TÓC NGẮN (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_4",
      oldPrice: 8000000,
      newPrice: 6000000,
      discount: 20,
    },
    {
      name: "NGUYÊN ĐẦU TÓC NGẮN (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_4",
      oldPrice: 8000000,
      newPrice: 6000000,
      discount: 20,
    },
    {
      name: "NGUYÊN ĐẦU TÓC NGẮN (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_4",
      oldPrice: 8000000,
      newPrice: 6000000,
      discount: 20,
    },
    {
      name: "NGUYÊN ĐẦU TÓC NGẮN (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_4",
      oldPrice: 8000000,
      newPrice: 6000000,
      discount: 20,
    },
    {
      name: "NGUYÊN ĐẦU TÓC NGẮN (CHƯA BAO GỒM PHÍ UỐN NHUỘM)",
      image: "link_image_4",
      oldPrice: 8000000,
      newPrice: 6000000,
      discount: 20,
    },
    // Thêm các sản phẩm ở đây nếu cần
  ];

  return (
    <div className="featured-container">
      <h2 className="featured-title">Sản Phẩm Nổi Bật</h2>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowSize: 50,
            },
          },
        }}
      >
        <Carousel
          autoplay
          arrows
          slidesToShow={6}
          slidesToScroll={1}
          infinite
          draggable
          dots={false}
          responsive={[
            {
              breakpoint: 1600, // Desktop: 7 thẻ
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024, // Tablet: 4 thẻ
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Mobile: 2 thẻ
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // Small Mobile: 1 thẻ
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          className="custom-carousel"
        >
          {featuredProducts.map((item, idx) => (
            <div className="featured-item" key={idx}>
              <div className="discount-tag">-{item.discount}%</div>
              <img src={item.image} alt={item.name} className="featured-img" />
              <div className="featured-name">{item.name}</div>
              <div className="featured-price">
                <span className="new-price">
                  {item.newPrice.toLocaleString()}đ
                </span>
                <span className="old-price">
                  {item.oldPrice.toLocaleString()}đ
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </ConfigProvider>
    </div>
  );
};

export default FeaturedProducts;
