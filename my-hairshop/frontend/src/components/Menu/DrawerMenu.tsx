import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom"; 

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  const [expandProducts, setExpandProducts] = useState(false);
  const [expandGuides, setExpandGuides] = useState(false);

  return (
    <Drawer title="Menu" placement="left" onClose={onClose} open={open}>
      <div className="drawer-links">
        <Link to="/" onClick={onClose}>TRANG CHỦ</Link>

        <div className="expandable">
          <div
            className="expand-header"
            onClick={() => setExpandProducts(!expandProducts)}
          >
            <span>SẢN PHẨM</span>
            <span className="toggle-icon">{expandProducts ? "−" : "+"}</span>
          </div>
          {expandProducts && (
            <div className="sub-links">
              <Link to="/products/type" onClick={onClose}>Tóc giả từ tóc thật(Ngôi siêu da)</Link>
              <Link to="/products/type" onClick={onClose}>Tóc giả từ tóc thật(Ngôi thường)</Link>
              <Link to="/products/type" onClick={onClose}>Tóc giả</Link>
              <Link to="/products/type" onClick={onClose}>Phụ kiện tóc</Link>
            </div>
          )}
        </div>

        <div className="expandable">
          <div
            className="expand-header"
            onClick={() => setExpandGuides(!expandGuides)}
          >
            <span>HƯỚNG DẪN</span>
            <span className="toggle-icon">{expandGuides ? "−" : "+"}</span>
          </div>
          {expandGuides && (
            <div className="sub-links">
              <Link to="/guides/use" onClick={onClose}>Hướng dẫn chăm sóc tóc giả</Link>
              <Link to="/guides/faq" onClick={onClose}>Hướng dẫn sử dụng tóc giả</Link>
              <Link to="/guides/faqs" onClick={onClose}>Hướng dẫn chọn tóc giả phù hợp</Link>
            </div>
          )}
        </div>

        <Link to="/services" onClick={onClose}>DỊCH VỤ</Link>
        <Link to="/contact" onClick={onClose}>LIÊN HỆ</Link>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
