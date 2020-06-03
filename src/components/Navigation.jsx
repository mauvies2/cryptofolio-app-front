import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  // const [input, setInput] = useState(false);

  // const borderOnFocus = {
  //   border: input ? "2px solid #6c64e8" : "none",
  // };

  return (
    <nav>
      <div className="nav-bar">
        <NavMenu open={open} setOpen={setOpen} />
        <div className="ham-menu" onClick={() => setOpen(true)}>
          <div className="center-line"></div>
        </div>
        <div className="logo">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
          <p className="capitol">
            <span>c</span>apitol
          </p>
        </div>
        <ul className="nav-menu-desktop">
          <NavLink to="/" className="nav-link">
            <li>
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink to="/portfolio" className="nav-link">
            <li>
              <p>Portfolio</p>
            </li>
          </NavLink>
          <NavLink to="/currencies" className="nav-link">
            <li>
              <p>Assets</p>
            </li>
          </NavLink>

          <NavLink to="/about" className="nav-link">
            <li>
              <p>About</p>
            </li>
          </NavLink>
          <NavLink to="/about" className="nav-link">
            <li>
              <p>Support</p>
            </li>
          </NavLink>
        </ul>
        <div className="right-mobile-menu">
          <div>
            <NavLink
              to="/Sign"
              className="btn-login"
              // onClick={() => props.setOpen(false)}
            >
              Login
            </NavLink>
            {/* <NavLink to="/Sign" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
