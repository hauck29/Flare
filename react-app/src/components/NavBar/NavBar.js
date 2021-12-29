
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
        <div className='searchBar'>
          <input className='searchBarInput' type="text" placeholder="Search for birds here..."></input>
        </div>
      <ul className='navListBox'>
        {/* <li>
          <NavLink className='navElementBox' to='/photos' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li> */}
        <li>
          <LoginFormModal />

        </li>
        <li>
          <SignupFormModal />

        </li>

        <li className='logoutBtn'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
