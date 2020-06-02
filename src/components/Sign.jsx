import React, { useState } from "react";
// import Portfolio from "./Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Redirect } from "react-router-dom";

const Sign = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const postLogin = (user, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: password }),
    };
    fetch("http://localhost:8000/api-token-auth/", requestOptions).then(
      (response) => {
        response.json().then((token) => {
          console.log(token);
          localStorage.setItem("token", token.token);
          setLoggedIn(true);
        });
      }
    );
    // if (loggedIn) {
    //   <Redirect to="/portfolio" />;
    // }
  };
  console.log(loggedIn);

  let data = {};
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    data = { ...data, [name]: value };
    console.log(data, "handleinput");
  };

  // const redirect = () => {
  //   return <Redirect to="/portfolio" />;
  // };
  return (
    <div className="login">
      {loggedIn ? (
        <Redirect to="/portfolio" />
      ) : (
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
                console.log(data, "onsubmit");
                postLogin(data.user, data.password);
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
      )}
    </div>
  );
};

export default Sign;
