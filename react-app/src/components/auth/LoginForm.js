import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login, demoLogin } from "../../store/session";
import "./LoginForm.css";



const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    history.push('/');
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleDemoLogin= (e) => {
    e.preventDefault();
    return dispatch(demoLogin())
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='loginOutterDiv'>
        <div className="loginFormDiv">
          <div>
            <label htmlFor="email"></label>
            <input
              className="loginInput"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              className="loginInput"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button className="loginBtn" type="submit">
            Login
          </button>
          <button onClick={handleDemoLogin} className="loginBtn" type="submit">
            Demo-Login
          </button>

        </div>
      </div>
    </form>
  );
};

export default LoginForm;
