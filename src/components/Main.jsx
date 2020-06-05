import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import SignUp from "./SignUp";
import Portfolio from "./Portfolio";
import Assets from "./Assets";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/sign" render={() => <Sign />}></Route>
        <Route exact path="/signUp" render={() => <SignUp />}></Route>
        <Route exact path="/portfolio" render={() => <Portfolio />}></Route>
        <Route exact path="/assets" render={() => <Assets />}></Route>
        <Route exact path="/about" render={() => <About />}></Route>
        <Route exact path="/contact" render={() => <Contact />}></Route>
      </Switch>
    </main>
  );
};

export default Main;
