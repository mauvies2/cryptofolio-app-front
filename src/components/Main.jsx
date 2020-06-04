import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import SignUp from "./SignUp";
import Portfolio from "./Portfolio";
import Currencies from "./Currencies";
import About from "./About";
import Contact from "./Contact";

const Main = (props) => {
  const [auth, setAuth] = useState(true);

  const authentication = () => {
    console.log("login");
    // setAuth(true);
  };
  const loggedOut = () => {
    setAuth(false);
  };

  function privateRoute() {
    return auth ? (
      <Route
        exact
        path="/portfolio"
        render={() => <Portfolio loggedOut={loggedOut} />}
      ></Route>
    ) : (
      <Redirect to="/sign" />
    );
  }
  // useEffect(() => {
  //   privateRoute();
  // }, [auth]);

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route
          exact
          path="/sign"
          render={() => <Sign authentication={authentication} />}
        ></Route>
        <Route exact path="/signUp" render={() => <SignUp />}></Route>
        <Route exact path="/signUp" render={() => <SignUp />}></Route>
        {privateRoute}

        <Route exact path="/currencies" render={() => <Currencies />}></Route>
        <Route exact path="/about" render={() => <About />}></Route>
        <Route exact path="/contact" render={() => <Contact />}></Route>
      </Switch>
    </main>
  );
};

export default Main;
