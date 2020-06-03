import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Currencies = () => (
  <div className="about">
    <div className="about-container">
      <h1>About</h1>
      <p>
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
        molestias?
      </p>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-col">
          <li>
            <a href="#" className="">
              Get started
            </a>
          </li>
          <li>
            <a href="#" className="">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="">
              Assets
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="">
              About
            </a>
          </li>
          <li>
            <a href="#" className="">
              Help
            </a>
          </li>
        </ul>
        <ul className="footer-col">
          <li>
            <a href="#" className="">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="">
              Terms of Service
            </a>
          </li>
        </ul>

        <div className="social-networks">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className="nav-menu-icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="nav-menu-icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="nav-menu-icon" />
          </a>
        </div>
      </div>
      <div className="register-company">
        <p>© 2020 Capitol Inc.</p>
      </div>
    </footer>
  </div>
);

export default Currencies;
