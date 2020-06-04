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
          localStorage.setItem("token", token.token);
          setLoggedIn(true);
        });
      }
    );
  };

  let data = {};
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    data = { ...data, [name]: value };
    console.log(data, "handleinput");
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data, "onsubmit");
          postLogin(data.user, data.password);
        }}
      >
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </div>
              <button className="btn-login">Login</button>

              <div className="remember-forgot">Or</div>

              <NavLink to="/SignUp" className="btn-signup">
                Sign Up
              </NavLink>
            </section>
          </div>
        )}
      </form>
    </div>
  );
};

export default Sign;
