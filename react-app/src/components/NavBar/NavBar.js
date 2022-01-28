import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import "../NavBar/NavBar.css";
import SignupFormModal from "../SignupFormModal/SignUpForm";
import githubLogo from "./githubLogo.png";
import linkedInLogo from "./linkedInLogo.png";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <>
        <div className="container">
          <div className="bird-container bird-container--one">
            <div className="bird bird--one"></div>
          </div>

          <div className="bird-container bird-container--two">
            <div className="bird bird--two"></div>
          </div>

          <div className="bird-container bird-container--three">
            <div className="bird bird--three"></div>
          </div>

          <div className="bird-container bird-container--four">
            <div className="bird bird--four"></div>
          </div>
          <div className="bird-container bird-container--five">
            <div className="bird bird--five"></div>
          </div>
          <div className="bird-container bird-container--six">
            <div className="bird bird--six"></div>
          </div>
          <div className="bird-container bird-container--seven">
            <div className="bird bird--seven"></div>
          </div>
          <div className="bird-container bird-container--eight">
            <div className="bird bird--eight"></div>
          </div>
        </div>
        <nav className="navOutterBox">
          <div className="flareWordContainer">
            <div className="flareWord1">flare</div>
            <div className="flareWord2">b</div>
            <div className="flareWord3">ird</div>
            <div className="bottomBorder">
              <a href="https://github.com/hauck29">
                <img className="gLogo" src={githubLogo} alt=""></img>
              </a>
              <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
                <img className="lLogo" src={linkedInLogo} alt=""></img>
              </a>
            </div>
          </div>
          <div id='sDiv'>
          {/* <input
            type="search"
            id="site-search"
            placeholder='Search for Birds'
          />

          <button className='searchBtn'>Search</button> */}
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
        <div className="container">
          <div className="bird-container bird-container--one">
            <div className="bird bird--one"></div>
          </div>

          <div className="bird-container bird-container--two">
            <div className="bird bird--two"></div>
          </div>

          <div className="bird-container bird-container--three">
            <div className="bird bird--three"></div>
          </div>

          <div className="bird-container bird-container--four">
            <div className="bird bird--four"></div>
          </div>
          <div className="bird-container bird-container--five">
            <div className="bird bird--five"></div>
          </div>
          <div className="bird-container bird-container--six">
            <div className="bird bird--six"></div>
          </div>
          <div className="bird-container bird-container--seven">
            <div className="bird bird--seven"></div>
          </div>
          <div className="bird-container bird-container--eight">
            <div className="bird bird--eight"></div>
          </div>
        </div>
        <nav className="navOutterBox">
          <div className="flareWordContainer">
            <div className="flareWord1">flare</div>
            <div className="flareWord2">b</div>
            <div className="flareWord3">ird</div>
            <div className="bottomBorder">
              <a href="https://github.com/hauck29">
                <img className="gLogo" src={githubLogo} alt=""></img>
              </a>
              <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
                <img className="lLogo" src={linkedInLogo} alt=""></img>
              </a>
            </div>
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
