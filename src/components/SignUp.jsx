import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const postNewUser = ({ name, password, email }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
        email: email,
      }),
    };
    fetch(`http://127.0.0.1:8000/create_user/`, requestOptions)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  let dataSignUp = [];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dataSignUp = { ...dataSignUp, [name]: value };
  };
  return (
    <div className="login">
      <div className="containerLog">
        <section className="main">
          {/* <form className="data"> */}
          <div className="btn-data">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              id="name"
              name="name"
              type="text"
              className="user"
              placeholder="Name"
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
          <div className="btn-data">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              id="password2"
              type="password"
              name="password2"
              className="password"
              placeholder="Repeat password"
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-data">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              id="email"
              name="email"
              type="email"
              className="password"
              placeholder="Email address"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn-login" onClick={() => postNewUser(dataSignUp)}>
            Sign Up
          </button>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
