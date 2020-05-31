import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  // faTwitterF,
  // faInstagramF,
} from "@fortawesome/free-brands-svg-icons";

const Home = (props) => {
  return (
    <div>
      <header className="home">
        <div className="container">
          <h1>Easy Access To Your Portfolio</h1>
          <p>
            We provide a solution to access your Portfolio in real time without
            putting your passwords in risk
          </p>
          <div className="btn-regist">Join Now</div>
        </div>
      </header>
      <main>
        {/* <Currency /> */}
        <section className="features">
          <div className="feature1">
            <h2 className="feature1 tittle">We provide a solution</h2>
            <p className="feature1 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quibusdam praesentium, sit eveniet iure assumenda beatae. Esse
              illum necessitatibus voluptas!
            </p>
          </div>
          <div className="feature2">
            <h2 className="feature2 tittle">Memories that last forever</h2>
            <p className="feature2 description">
              Easily fulfill your clients' print orders with the lab of your
              choice: Choose one of our integrated lab partners for a allow
              clients to order prints from your lab.
            </p>
          </div>
          <div className="feature3">
            <h2 className="feature3 tittle">Simplify your file delivery</h2>
            <p className="feature3 description">
              Share or sell full- or low-resolution digitals. You're in control
              of what you charge (or don't charge) and how clients receive and
              access their files.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <ul className="footer-col">
            <li>
              <a href="#" className="">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="">
                Get started
              </a>
            </li>
            <li>
              <a href="#" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="">
                We're Hiring!
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="">
                Help
              </a>
            </li>
          </ul>
          <div className="footer-col">
            <div>
              <a href="#" className="">
                FAQ
              </a>
            </div>
            <div>
              <a href="#" className="">
                Privacy
              </a>
            </div>
            <div>
              <a href="#" className="">
                Terms of Services
              </a>
            </div>

            <div className="lang-button">
              <div className="flag">
                <img src="./images/Languages/EnglishUSA.png" alt="EEUU flag" />
              </div>
              <div className="language">English</div>
              <div className="dropdown-language-icon">
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul id="drop-list" className="dropdown-list">
                <li className="lang-list">
                  <div className="flag">
                    <img
                      src="./images/Languages/EnglishUSA.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div className="dropdown-item" href="#">
                    English
                  </div>
                </li>
                <li className="lang-list">
                  <div className="flag">
                    <img
                      src="./images/Languages/PortugueseBrazil.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div className="dropdown-item" href="#">
                    Portuguese
                  </div>
                </li>
                <li className="lang-list">
                  <div className="flag">
                    <img
                      src="./images/Languages/SpanishSpain.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div className="dropdown-item" href="#">
                    Spanish
                  </div>
                </li>
              </ul>
            </div>
            <div className="social-networks">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} className="nav-menu-icon" />
              </a>
              {/* <a href="#">
                <FontAwesomeIcon
                  icon={faInstagramI}
                  className="nav-menu-icon"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitterT} className="nav-menu-icon" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="register-company">
          <p>© 2020 Capitol Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
