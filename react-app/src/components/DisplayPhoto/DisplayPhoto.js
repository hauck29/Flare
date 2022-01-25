import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import { NavLink } from "react-router-dom";
import "./DisplayPhoto.css";
import { getPhotoComments } from "../../store/photoComments";

function DisplayPhoto({ photoId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos(), dispatch(getPhotoComments()));
  }, [dispatch]);
  const photos = useSelector((state) => state.photos);
  const photoComments = useSelector((state) =>
    Object.values(state.photoComments)
  );
  const photo = photos[photoId];
  console.log("$$$$$$$$$$", photos, photo);
  return (
    <>
      <div className="rtpBack">
        <NavLink className="rtp" to={"/"}>
          Return to Photos
        </NavLink>
      </div>
      <div className="displayPhoto">
        <img
          src="https://image.shutterstock.com/image-photo/photo-owl-macro-photography-high-260nw-1178957458.jpg"
          alt=""
        ></img>
      </div>
      <div className="createCommentDiv">
        <div clasName="commentsDiv">
            {photoComments?.reverse().map((photoComment) => (
          <div className="commentDivB" key={photoComment.id}>
              {photoComment.pcontent}
          </div>
            ))}
        </div>
      </div>
    </>
  );
  //   return <img src={photo.url} alt=""></img>;
}

export default DisplayPhoto;
