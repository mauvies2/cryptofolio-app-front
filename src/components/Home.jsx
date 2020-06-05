import React from "react";

import Footer from "./Footer";

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
          <div className="btn-regist">Join Now</div>
        </div>
      </header>
      <main>
        <div className="home-main">
          <section className="features">
            <div className="feature1">
              <h2>We provide a solution</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quibusdam praesentium, sit eveniet iure assumenda beatae. Esse
                illum necessitatibus voluptas!
              </p>
            </div>
            <div className="feature2">
              <h2 className="feature2 tittle">Memories that last forever</h2>
              <p className="feature2 description">
                Easily fulfill your clients' print orders with the lab of your
                choice: Choose one of our integrated lab partners for a allow
                clients to order prints from your lab.
              </p>
            </div>
            <div className="feature3">
              <h2 className="feature3 tittle">Simplify your file delivery</h2>
              <p className="feature3 description">
                Share or sell full- or low-resolution digitals. You're in
                control of what you charge (or don't charge) and how clients
                receive and access their files.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
