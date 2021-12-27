
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import '../NavBar/NavBar.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal/indexSignupForm'

const NavBar = () => {
  return (
    <nav className='navOutterBox'>
      <div className='flareWord1'>
            flare
        </div>
        <div className='flareWord2'>
            b
        </div>
        <div className='flareWord3'>
            ird
        </div>
        {/* <img className='navPic' src={navPic}/> */}
        <div className='searchBar'>
          <input className='searchBarInput' type="text" placeholder="Search for birds here..."></input>
        </div>
      <ul className='navListBox'>
        <li>
          <NavLink className='navElementBox' to='/photos' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          {/* <> */}
          <LoginFormModal />
          {/* <NavLink className='navElementBox' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          {/* </> */}
        </li>
        <li>
          <SignupFormModal />
          {/* <NavLink className='navElementBox' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
        </li>

        <li className='logoutBtn'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
