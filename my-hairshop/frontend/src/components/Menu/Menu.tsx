import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface MenuProps {
  productItems: any[];
  guideItems: any[];
}

const Menu: React.FC<MenuProps> = ({ productItems, guideItems }) => {
  const [productOpen, setProductOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <div className="header-menubar">
      <a href="/" className="menu-item">
        TRANG CHỦ
      </a>
      <Dropdown
        menu={{ items: productItems }}
        open={productOpen}
        onOpenChange={(flag) => setProductOpen(flag)}
      >
        <a onClick={(e) => e.preventDefault()} className="menu-item dropdown-link">
          <Space>SẢN PHẨM</Space>
          <DownOutlined
            className={`custom-icon spaced-icon ${productOpen ? "rotate-up" : ""}`}
          />
        </a>
      </Dropdown>
      <Dropdown
        menu={{ items: guideItems }}
        open={guideOpen}
        onOpenChange={(flag) => setGuideOpen(flag)}
      >
        <a onClick={(e) => e.preventDefault()} className="menu-item dropdown-link">
          <Space>HƯỚNG DẪN</Space>
          <DownOutlined
            className={`custom-icon spaced-icon ${guideOpen ? "rotate-up" : ""}`}
          />
        </a>
      </Dropdown>
      <a href="/news" className="menu-item">DỊCH VỤ</a>
      <a href="/contact" className="menu-item">LIÊN HỆ</a>
    </div>
  );
};

export default Menu;
