import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
  <nav className="nav-menu">
    <h1>Crypfo</h1>
    <div class="search-box">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" class="search-bar" placeholder="Search crypto..." />
      <div id="close-icon-search" class="close-icon-search">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
    <div class="ham-menu">
      <div class="center-line"></div>
    </div>

    <ul className="nav-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/currencies">Currencies</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
