import React from "react";

import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-container">
      <header className="home">
        <div className="container">
          <h1>Easy Access To Your Portfolio</h1>
          <h3>
            We provide a solution to access your Portfolio in real time without
            putting your passwords in risk
          </h3>
          <NavLink to="/signup" className="btn-regist">
            Join Now
          </NavLink>
        </div>
      </header>
      <section className="home-main">
        <div className="feature1">
          <h2>We provide a solution</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quibusdam praesentium, sit eveniet iure assumenda beatae. Esse illum
            necessitatibus voluptas!
          </p>
        </div>
        <div className="feature2">
          <h2 className="feature2 tittle">Memories that last forever</h2>
          <p className="feature2 description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quibusdam praesentium, sit eveniet iure assumenda beatae. Esse illum
            necessitatibus voluptas!
          </p>
        </div>
        <div className="feature3">
          <h2 className="feature3 tittle">Simplify your file delivery</h2>
          <p className="feature3 description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quibusdam praesentium, sit eveniet iure assumenda beatae. Esse illum
            necessitatibus voluptas!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
