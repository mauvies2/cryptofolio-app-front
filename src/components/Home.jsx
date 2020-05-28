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
        <section class="features">
          <div class="feature1">
            <h2 class="feature1 tittle">We provide a solution</h2>
            <p class="feature1 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quibusdam praesentium, sit eveniet iure assumenda beatae. Esse
              illum necessitatibus voluptas!
            </p>
          </div>
          <div class="feature2">
            <h2 class="feature2 tittle">Memories that last forever</h2>
            <p class="feature2 description">
              Easily fulfill your clients' print orders with the lab of your
              choice: Choose one of our integrated lab partners for a allow
              clients to order prints from your lab.
            </p>
          </div>
          <div class="feature3">
            <h2 class="feature3 tittle">Simplify your file delivery</h2>
            <p class="feature3 description">
              Share or sell full- or low-resolution digitals. You're in control
              of what you charge (or don't charge) and how clients receive and
              access their files.
            </p>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-content">
          <ul class="footer-col">
            <li>
              <a href="#" class="">
                How it works
              </a>
            </li>
            <li>
              <a href="#" class="">
                Get started
              </a>
            </li>
            <li>
              <a href="#" class="">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="">
                Press
              </a>
            </li>
            <li>
              <a href="#" class="">
                We're Hiring!
              </a>
            </li>
            <li>
              <a href="#" class="">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="">
                Help
              </a>
            </li>
          </ul>
          <div class="footer-col">
            <div>
              <a href="#" class="">
                FAQ
              </a>
            </div>
            <div>
              <a href="#" class="">
                Privacy
              </a>
            </div>
            <div>
              <a href="#" class="">
                Terms of Services
              </a>
            </div>

            <div class="lang-button" onclick="Lang()" onclick="closeLang()">
              <div class="flag">
                <img src="./images/Languages/EnglishUSA.png" alt="EEUU flag" />
              </div>
              <div class="language">English</div>
              <div class="dropdown-language-icon">
                <i class="fas fa-caret-down"></i>
              </div>
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul id="drop-list" class="dropdown-list">
                <li class="lang-list">
                  <div class="flag">
                    <img
                      src="./images/Languages/EnglishUSA.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div class="dropdown-item" href="#">
                    English
                  </div>
                </li>
                <li class="lang-list">
                  <div class="flag">
                    <img
                      src="./images/Languages/PortugueseBrazil.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div class="dropdown-item" href="#">
                    Portuguese
                  </div>
                </li>
                <li class="lang-list">
                  <div class="flag">
                    <img
                      src="./images/Languages/SpanishSpain.png"
                      alt="EEUU flag"
                    />
                  </div>
                  <div class="dropdown-item" href="#">
                    Spanish
                  </div>
                </li>
              </ul>
            </div>
            <div class="social-networks">
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
        <div class="register-company">
          <p>© 2020 Capitol Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
