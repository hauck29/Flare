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

    const dispatch = useDispatch;
    return (
        <div>
            {id}
            <img src={url}></img>
            {user_id}
            {caption}
        </div>
    )
}

export default Photo;
