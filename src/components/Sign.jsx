import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Portfolio = (props) => {
  return (
    <div className="login">
      <div className="containerLog">
        {/* <div className="header">
          <p>Inicio de sesión</p>
        </div> */}
        <section className="main">
          <div className="data">
            <div className="btn-data">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                id="user"
                type="text"
                className="user"
                placeholder="User o e-mail address"
              />
            </div>
            <div className="btn-data">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="password"
                type="password"
                className="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="btn-login">
            <a href="#">Sign In</a>
          </div>

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              &nbsp;<a href="#">Remember me</a>
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
