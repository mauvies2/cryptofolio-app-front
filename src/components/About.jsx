import React from "react";
import Footer from "./Footer";

const About = () => (
  <div className="about-main">
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        <p>
          Capitol is an safe tool to access your portfolio overall balance
          without having to manually edit your data or access the accounts where
          they are stored, thereby compromising your passwords.
        </p>
        <p>
          The prices are updated every 15 minutes through an API call, so you
          can check your balance at any time!
        </p>
        <p>Keep in touch because we are working in exciting updates! Enjoy.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
