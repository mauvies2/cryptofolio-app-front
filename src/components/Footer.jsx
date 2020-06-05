import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-col">
          <li>
            <p>Get started</p>
          </li>
          <li>
            <p>Portfolio</p>
          </li>
          <li>
            <p>Assets</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Help</p>
          </li>
        </ul>
        <div className="footer-col">
          <div>
            <p>FAQ</p>
          </div>
          <div>
            <p>Privacy</p>
          </div>
          <div>
            <p>Terms of Services</p>
          </div>

          <div className="social-networks">
            <p>
              <FontAwesomeIcon icon={faFacebookF} className="nav-menu-icon" />
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} className="nav-menu-icon" />
            </p>
            <p>
              <FontAwesomeIcon icon={faTwitter} className="nav-menu-icon" />
            </p>
          </div>
        </div>
      </div>
      <div className="register-company">
        <p>© 2020 Capitol Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
