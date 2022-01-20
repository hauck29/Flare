import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/SignupFormModal/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import './components/SplashPage/SplashPage.css'
import Feed from './components/Feed/Feed'
import './App.css';
import githubLogo from "./githubLogo.png";
import linkedInLogo from "./linkedInLogo.png";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/login' exact={true}>
          <div className='h1'><h2>Welcome to FlareBird, a photo aviary. Log In or Sign Up to begin!</h2></div>
          <LoginForm />
          <div className="bottomBorder">
        <p className="credits"> © 2021 Tony Hauck</p>
        <a href="https://github.com/hauck29">
          <img className="gLogo" src={githubLogo} alt=''></img>
        </a>
        <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
          <img className="lLogo" src={linkedInLogo} alt=''></img>
        </a>
      </div>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Feed />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
