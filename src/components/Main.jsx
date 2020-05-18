import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Currencies from "./Currencies";
import About from "./About";
import Contact from "./Contact";

const Main = (props) => {
  // console.log(props.currencies);
  // currency={props.currencies}
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home currencies={props.currencies} />}
        ></Route>
        <Route
          exact
          path="/portfolio"
          render={() => <Portfolio currencies={props.currencies} />}
        ></Route>
        <Route exact path="/currencies" render={() => <Currencies />}></Route>
        <Route exact path="/about" render={() => <About />}></Route>
        <Route exact path="/contact" render={() => <Contact />}></Route>
      </Switch>
    </main>
  );
};

export default Main;
