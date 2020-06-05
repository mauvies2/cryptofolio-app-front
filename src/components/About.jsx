import React from "react";
import Footer from "./Footer";

const About = () => (
  <div className="about-main">
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        <p>
          We are just two friends passionate about programming that wanted to
          build a project for our portfolio which cover the general aspects of a
          progressive web application.
        </p>
        <p>
          Capitol is an application which allows you to access your portfolio
          overall balance without having to manually edit your data or access
          all the accounts where you own them, thereby compromising your
          passwords.
        </p>
        <p>
          Here the prices are updated each day and you can check your balance at
          any time!
        </p>
        <p>
          Keep in touch because we are working in exciting updates to our App!
          Enjoy.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
