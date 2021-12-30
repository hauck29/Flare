
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import '../NavBar/NavBar.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal/indexSignupForm';
import SignupForm from '../SignupFormModal/SignUpForm';
import LoginForm from '../LoginFormModal/LoginForm';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if(sessionUser){

    return (
      <nav className='navOutterBox'>
        <div className='flareWordContainer'>
        <div className='flareWord1'>
              flare
          </div>
          <div className='flareWord2'>
              b
          </div>
          <div className='flareWord3'>
              ird
          </div>
          </div>
          <div className='searchBar'>
          </div>
        <ul className='navListBox'>

          <li className='logoutBtn'>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    );
  }else{
    return (
      <nav className='navOutterBox'>
        <div className='flareWordContainer'>
        <div className='flareWord1'>
              flare
          </div>
          <div className='flareWord2'>
              b
          </div>
          <div className='flareWord3'>
              ird
          </div>
          </div>
          <div className='searchBar'>
          </div>
        <ul className='navListBox'>
          <li>
            <SignupFormModal />
          </li>

        </ul>
      </nav>
    );
  }
}

export default NavBar;
