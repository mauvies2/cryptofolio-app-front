import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
const Contact = () => (
  <div className="about-main">
    <div className="about">
      <div className="about-container">
        <h1>Support</h1>
        <p>If you need support or have any suggestion, please contact us!</p>
        <p>mauricioviera_r@hotmail.com</p>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} className="nav-menu-icon" />{" "}
          <span>+34 644 73 26 66</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
