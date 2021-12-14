import LoginForm from "../auth/LoginForm";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "../SplashPage/SplashPage.css";

const SplashPage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return (
      <div className="startButtonDiv">
        <button className="startButton">Begin Your Aviary</button>
      </div>
    );
  } else {
    return (
      <>
        <div className="welcomeMessage">Welcome {sessionUser.username}</div>
        <div>
            <img className='splashImage' src='https://i.imgur.com/TnBPS5V.jpeg'></img>
        </div>
        <div className="startButtonDiv">
        <button className="startButton">Begin Your Aviary</button>
      </div>
      </>
    );
  }
};

export default SplashPage;
