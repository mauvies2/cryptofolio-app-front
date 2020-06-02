import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import SignUp from "./SignUp";
import Portfolio from "./Portfolio";
import Currencies from "./Currencies";
import About from "./About";
import Contact from "./Contact";

const Main = (props) => {
  return (
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign" component={Sign} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/currencies" component={Currencies} />
      <Route exact path="/About" component={About} />
      <Route exact path="/contact" component={Contact} />
    </switch>
  );
};

export default Main;
