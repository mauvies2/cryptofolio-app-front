import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sign = () => {
  const postLogin = (user, password) => {
    console.log(user, password, "entro");
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
      <div className="containerLog">
        {/* <div className="header">
          <p>Inicio de sesión</p>
        </div> */}
        <section className="main">
          <form className="data">
            <div className="btn-data">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                id="user"
                name="user"
                type="text"
                className="user"
                placeholder="User o e-mail address"
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
              <a href="#">Login</a>
            </button>
          </form>

          <div className="remember-forgot">Or</div>

          <NavLink to="/SignUp" className="btn-signup">
            Sign Up
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Sign;
