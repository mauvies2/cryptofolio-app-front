import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Fetch post for new user sign up
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

    fetch(
      `http://django-env.eba-iarke2vi.us-west-2.elasticbeanstalk.com/user/create_user/`,
      requestOptions
    )
      .then((res) => {
        console.log(res);
        setIsSignUp(true);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  let dataSignUp = [];
  // Grab input value in form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dataSignUp = { ...dataSignUp, [name]: value };
  };

  if (isSignUp) {
    return <Redirect to="/Sign" />;
  }

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewUser(dataSignUp);
        }}
      >
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
            <div className="btn-data">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="password2"
                type="password"
                name="password2"
                className="password"
                placeholder="Repeat password"
                onChange={handleInputChange}
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>
            <button className="btn-login">Sign Up</button>
          </section>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
