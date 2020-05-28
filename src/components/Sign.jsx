import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sign = () => {
  let data = [];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    data = { ...data, [name]: value };
    console.log(data);
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
            <div className="btn-login">
              <a href="#">Login</a>
            </div>
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
