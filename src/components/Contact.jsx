import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";
let dataSignUp = [];
const Contact = () => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dataSignUp = { ...dataSignUp, [name]: value };
  };

  return (
    <div className="about-main">
      <div className="about">
        <div className="about-container">
          <h1>Support</h1>
          <p>If you need support or have any suggestion, please contact us!</p>
          <br></br>
          <section className="main">
            {/* <form className="data"> */}
            <div className="btn-data">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                id="name"
                name="name"
                type="text"
                className="user"
                placeholder="Name"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div className="btn-data">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                id="email"
                name="email"
                type="email"
                className="password"
                placeholder="Email address"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div
              className="btn-data"
              style={{
                height: "10rem",
                alignItems: "flex-start",
                paddingTop: "1.5rem",
                paddingLeft: "3rem",
              }}
            >
              <input
                id="message"
                type="message"
                name="message"
                className="password"
                placeholder="Type your message here..."
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>

            <button className="btn-login">Send</button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
