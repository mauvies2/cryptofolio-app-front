import React from "react";
import { NavLink } from "react-router-dom";
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
          {/* <li>
            <p>Get started</p>
          </li> */}
          <li>
            <NavLink to="/portfolio" className="nav-link">
              <p>Portfolio</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/assets" className="nav-link">
              <p>Assets</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              <p>Contact</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              <p>Support</p>
            </NavLink>
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
