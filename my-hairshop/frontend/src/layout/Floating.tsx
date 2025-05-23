import React from "react";
import { FaPhone, FaEnvelope, FaFacebookMessenger, FaMapMarkerAlt } from "react-icons/fa";

const FloatingContact: React.FC = () => {
  return (
   <>
     <div className="floating-contact">
      <a href="tel:0123456789" className="contact-icon phone">
        <FaPhone />
      </a>
      <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="contact-icon messenger">
        <FaFacebookMessenger />
      </a>
      <a href="https://goo.gl/maps/yourmaplink" target="_blank" rel="noopener noreferrer" className="contact-icon map">
        <FaMapMarkerAlt />
      </a>
    </div>
   </>
  );
};


export default FloatingContact;
