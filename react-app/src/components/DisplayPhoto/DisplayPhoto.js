import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import { NavLink } from "react-router-dom";

function DisplayPhoto({ photoId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  const photos = useSelector((state) => state.photos);
  const photo = photos[photoId];
  console.log("$$$$$$$$$$", photos, photo);
  return (
      <>
        <div className="rtpBack">
        <NavLink className="rtp" to={"/"}>
          Return to Photos
        </NavLink>
        </div>
    <img
      src="https://image.shutterstock.com/image-photo/photo-owl-macro-photography-high-260nw-1178957458.jpg"
      alt=""
    ></img>
      </>
  );
  //   return <img src={photo.url} alt=""></img>;
}

export default DisplayPhoto;
