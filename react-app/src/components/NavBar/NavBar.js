import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import "../NavBar/NavBar.css";
import SignupFormModal from "../SignupFormModal/indexSignupForm";
import SignupForm from "../SignupFormModal/SignUpForm";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <>
          <div class="container">
    <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
    </div>
    <div class="bird-container bird-container--five">
        <div class="bird bird--five"></div>
    </div>
    <div class="bird-container bird-container--six">
        <div class="bird bird--six"></div>
    </div>
    <div class="bird-container bird-container--seven">
        <div class="bird bird--seven"></div>
    </div>
    <div class="bird-container bird-container--eight">
        <div class="bird bird--eight"></div>
    </div>
</div>
        <nav className="navOutterBox">
          <div className="flareWordContainer">
            <div className="flareWord1">flare</div>
            <div className="flareWord2">b</div>
            <div className="flareWord3">ird</div>
          </div>
          <ul className="navListBox">
            <li className="logoutBtn">
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
       <div class="container">
    <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
    </div>
    <div class="bird-container bird-container--five">
        <div class="bird bird--five"></div>
    </div>
    <div class="bird-container bird-container--six">
        <div class="bird bird--six"></div>
    </div>
    <div class="bird-container bird-container--seven">
        <div class="bird bird--seven"></div>
    </div>
    <div class="bird-container bird-container--eight">
        <div class="bird bird--eight"></div>
    </div>
</div>
        <nav className="navOutterBox">
          <div className="flareWordContainer">
            <div className="flareWord1">flare</div>
            <div className="flareWord2">b</div>
            <div className="flareWord3">ird</div>
          </div>
          <div className="searchBar"></div>
          <ul className="navListBox">
            <li>
              <SignupFormModal />
            </li>
          </ul>
        </nav>
      </>
    );
  }
};

export default NavBar;
