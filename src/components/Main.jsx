import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import SignUp from "./SignUp";
import Portfolio from "./Portfolio";
import Currencies from "./Currencies";
import About from "./About";
import Contact from "./Contact";

const Main = (props) => {
  // Set private route to portfolio based on authentication status
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem("token");
      }}
    />
  );

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/Sign" render={() => <Sign />}></Route>
        <Route exact path="/SignUp" render={() => <SignUp />}></Route>
        {PrivateRoute}
        {/* <PrivateRoute
          exact
          path="/portfolio"
          render={(props) => {
            <Portfolio />;
          }}
        ></PrivateRoute> */}
        <Route exact path="/currencies" render={() => <Currencies />}></Route>
        <Route exact path="/about" render={() => <About />}></Route>
        <Route exact path="/contact" render={() => <Contact />}></Route>
      </Switch>
    </main>
  );
};

export default Main;
