import React from "react";
import { Card, Row, Col } from "antd";
import { Scissors, Truck } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors size={36} color="#8a5d10" />,
      title: "Cắt tóc & Tư vấn dệt tóc",
      description:
        "Phục vụ khách hàng tại nội thành Hà Nội. Đặt lịch và được phục vụ trong vòng 24h.",
    },
    {
      icon: <Truck size={36} color="#8a5d10" />,
      title: "Giao hàng nội thành 24h",
      description:
        "Giao hàng phụ kiện tóc, tóc giả trong vòng 24h tại khu vực nội thành Hà Nội.",
    },
  ];

  return (
    <>
      <div className="service-section">
        <h2 className="service-title">Dịch Vụ Của Chúng Tôi</h2>
        <Row gutter={[24, 24]} justify="center">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={10} lg={8} key={index}>
              <Card className="service-card" >
                <div className="service-icon">{service.icon}</div>
                <h2 className="service-name">{service.title}</h2>
                <p className="service-desc">{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Services;
