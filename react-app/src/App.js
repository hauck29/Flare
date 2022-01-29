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

import DisplayPhoto from './components/DisplayPhoto/DisplayPhoto';

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
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <Route path='/login' exact={true}>
          <div className='h1'><h2>Welcome to FlareBird, a photo aviary.</h2></div>
          <div className='h2'><h2>Log In or Sign Up to begin!</h2></div>
          <LoginForm />

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
        <ProtectedRoute path='/:photoId' exact={true}>
          <DisplayPhoto />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
