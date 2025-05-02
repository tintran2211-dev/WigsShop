import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter: React.FC = () => (
  <Footer className="app-footer">
    <div className="footer-content">
      {/* Bản đồ bên trái */}
      <div className="footer-section map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.778950544242!2d105.7979562!3d20.961390399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad6c1503a9b1%3A0x7351cb8c492b50b0!2zVMOzYyBHaeG6oyBOZ-G7jWMgTGFuIChWaeG7h24gSzMgVMOibiB0cmnhu4F1KQ!5e0!3m2!1svi!2s!4v1745994028507!5m2!1svi!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Thông tin liên hệ + Giờ mở cửa + Kết nối */}
      <div className="footer-right">
        <div className="footer-section contact">
          <h3>Liên hệ</h3>
          <p><strong>Điện thoại:</strong> <a href="tel:0385329721">038 532 9721</a></p>
          <p><strong>Fanpage:</strong> <a href="https://web.facebook.com/profile.php?id=100087387807907" target="_blank" rel="noopener noreferrer">Facebook Page</a></p>
          <p><strong>YouTube:</strong> <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Kênh YouTube</a></p>
        </div>

        <div className="footer-section info">
          <h3>Giờ mở cửa</h3>
          <p><strong>Thứ 2 - Thứ 7:</strong> 8:00 - 21:30</p>
          <p><strong>Chủ nhật:</strong> 9:00 - 21:30</p>
        </div>

        <div className="footer-section social">
          <h3>Kết nối</h3>
          <div className="social-icons">
            <a href="https://web.facebook.com/profile.php?id=100004905641500" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-address">
        <p>Địa chỉ: Số 89, Tổ 14, Kiến Hưng, Hà Đông, Hà Nội (Ngõ 106 đối diện cổng trước viện K3).</p>
      </div>
      <div>© 2025 Bản quyền thuộc Ngọc Lan. All rights reserved.</div>
    </div>
  </Footer>
);

export default AppFooter;
