import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        email
      )
    ) {
      return setErrors(["EMAIL must be in a valid format (name@email.com)"]);
    }
    if (password !== repeatPassword) {
      return setErrors(["Password and Confirm Password fields MUST match"]);
    } else {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      } else {
        history.push("/");
        setTimeout(() => {
          alert(
            "You have successfully created an account and have been logged in!"
          );
        }, 100);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="loginOutterDiv">
        <span className="pulse">
          <div className="loginFormDiv">
            <div className="splashWrapper">
              <div className="logInSplash">
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}


              <div>
                <input
                  className="loginInput"
                  type="text"
                  name="username"
                  placeholder="User Name"
                  onChange={updateUsername}
                  value={username}
                ></input>
              </div>
              <div>
                <input
                  className="loginInput"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <div>
                <input
                  className="loginInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div>
                <input
                  className="loginInput"
                  type="password"
                  name="repeat_password"
                  placeholder="Confirm Password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              </div>
              <div className="buttonsDiv">
                <button className="loginBtn" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          </div>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
