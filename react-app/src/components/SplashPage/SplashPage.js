import LoginForm from "../auth/LoginForm";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "../SplashPage/SplashPage.css";
import React from "react";
import githubLogo from "../SplashPage/githubLogo.png";
import linkedInLogo from "../SplashPage/linkedInLogo.png";

const SplashPage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return (
      <>
        <div className="welcomeMessage">Welcome {sessionUser.username}
        <div className="startButtonDiv">
        <button className="startButton">Enter Your Photo Aviary</button>
      </div>
      </div>
        <div>
            <img className='splashImage' src='https://i.imgur.com/TnBPS5V.jpeg'></img>
        </div>
        <div className="bottomBorder">
          <p className='credits'> © Tony Hauck 2021</p>
          <a href="https://github.com/hauck29"><img  className="gLogo" src={githubLogo}></img></a>
          <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
          <img className="lLogo"  src={linkedInLogo}></img>
          </a>
        </div>
      </>
    );
  }else{
    return (
      <h1>NOT LOGGED IN</h1>
    )
  }
};

export default SplashPage;
