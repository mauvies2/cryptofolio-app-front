import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./NavMenu";
import "../styles/_variables.scss";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState(false);

  const borderOnFocus = {
    border: input ? "2px solid #5e5ed8" : "none",
  };
  const iconOnFocus = {
    color: input ? "#5e5ed8" : "",
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <div className="logo-icon">
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
      </div>
      <div className="search-box" style={borderOnFocus}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search crypto..."
          onFocus={() => setInput(true)}
          onBlur={() => setInput(false)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          style={iconOnFocus}
        />
      </div>
      <div className="right-mobile-menu">
        <div>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>
        <div className="ham-menu" onClick={() => setOpen(true)}>
          <div className="center-line"></div>
        </div>
      </div>
      <NavMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navigation;
