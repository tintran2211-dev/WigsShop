import React, { useEffect, useState } from "react";
import {MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; 
import Menu from "../components/Menu/Menu";
import DrawerMenu from "../components/Menu/DrawerMenu";
import HeaderCarousel from "../components/Carousel/HeaderCarousel";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const productItems = [
    { label: <Link to="/products/type">TÓC GIẢ TỪ TÓC THẬT(NGÔI SIÊU DA)</Link>, key: "1" },
    { label: <Link to="/products/type">TÓC GIẢ TỪ TÓC THẬT(NGÔI THƯỜNG)</Link>, key: "2" },
    { label: <Link to="/products/type">TÓC GIẢ</Link>, key: "3" },
    { label: <Link to="/products/type">PHỤ KIỆN TÓC</Link>, key: "4" },
  ];

  const guideItems = [
    { label: <Link to="/guides/how-to-use">HƯỚNG DẪN CHĂM SÓC TÓC GIẢ</Link>, key: "1" },
    { label: <Link to="/guides/faq">HƯỚNG DẪN SỬ DỤNG TÓC GIẢ</Link>, key: "2" },
    { label: <Link to="/guides/installation">HƯỚNG DẪN CHỌN TÓC GIẢ PHÙ HỢP</Link>, key: "3" },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() =>{
    if(window.location.pathname === "/"){
      setIsHomePage(true);
    }else{
      setIsHomePage(false);
    }
  }, []);

  return (
    <>
       <div className="header">
        <div className="header-top">
          <div className="header-main">
            <div className="header-content">
              <MenuOutlined 
              className="menu-icon" 
              onClick={showDrawer} 
              />
              <Link className="header-title" to="/">TÓC GIẢ NGỌC LAN | TRAO TRỌN NIỀM TIN</Link>
              {/* <span className="header-title"></span> */}
            </div>
            <div className="header-logo"></div>
          </div>
        </div>
        <Menu 
        productItems={productItems} 
        guideItems={guideItems} 
        />
        <DrawerMenu 
        open={open} 
        onClose={onClose} 
        />
        {isHomePage && <HeaderCarousel />}
      </div>
    </>
  );
};
export default Header;
