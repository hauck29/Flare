import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./photo.css";



const Photo = ({
    id,
    url,
    user_id,
    caption
}) => {

    const handleClick = () => {

    }

    return (
        <div>
            <img src={url}></img>
        </div>
    )
}

export default Photo;
