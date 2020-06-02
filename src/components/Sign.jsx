import React, { useState } from "react";
// import Portfolio from "./Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Redirect, Route } from "react-router-dom";

const Sign = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const postLogin = (user, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: password }),
    };
    fetch("http://localhost:8000/api-token-auth/", requestOptions)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setLoggedIn(true);
          console.log(loggedIn);
          redirect();
        } else {
          console.log("hola");
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  };

  let data = {};
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    data = { ...data, [name]: value };
    console.log(data, "handleinput");
  };

  const redirect = () => {
    console.log("hola", "redirect");
    return (
      <Route exact path="/sign">
        {loggedIn && <Redirect to="/portfolio" />}
      </Route>
    );
  };
  return (
    <div className="login">
      <div className="containerLog">
        {/* <div className="header">
          <p>Inicio de sesión</p>
        </div> */}
        <section className="main">
          <div className="btn-data">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              id="user"
              name="user"
              type="text"
              className="user"
              placeholder="User or e-mail address"
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-data">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              id="password"
              name="password"
              type="password"
              className="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="btn-login"
            onClick={() => {
              postLogin(data.user, data.password);
              // redirect();
            }}
          >
            Login
          </button>

          <div className="remember-forgot">Or</div>

          <NavLink to="/SignUp" className="btn-signup">
            Sign Up
          </NavLink>
        </section>
      </div>
      {isError && <div>The username or password provided were incorrect!</div>}
    </div>
  );
};

export default Sign;
