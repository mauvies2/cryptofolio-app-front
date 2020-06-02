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
    <nav className="nav-bar">
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
      {/* <div className="search-box" style={borderOnFocus}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search crypto..."
          onFocus={() => setInput(true)}
          onBlur={() => setInput(false)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div> */}
      <div className="right-mobile-menu">
        <div>
          <NavLink to="/Sign" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
