import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./NavMenu";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  // const openNav = () => {
  //   setOpen(true);
  // };

  // const closeNav = () => {
  //   setOpen(false);
  // };

  return (
    <nav className="nav-bar">
      <div className="logo">CF</div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search crypto..."
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
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
