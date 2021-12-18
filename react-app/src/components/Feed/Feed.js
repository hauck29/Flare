import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto } from "../../store/photos";
import "../Feed/Feed.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const history = useHistory();
  const [toEditPhoto, setToEditPhoto] = useState(false);
  // const [url, setUrl] = useState(photo.url);
  // const [caption, setCaption] = useState(photo.caption);

  const cancel = (e) => {
    e.preventDefault();
    setToEditPhoto(!toEditPhoto);
  };

  const handleDelete = (id) => {
    dispatch(deletePhoto(id));
    history.push("/photos");
  };

  // const handleEditPhoto = (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     id: photo.id,
  //     url,
  //     caption,
  //   };
  //   dispatch(editPhoto(payload));
  //   setToEditPhoto(!toEditPhoto);
  // };

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div>
      <div className="addPhotoBtnDiv">
        <NavLink className="addPhotoBtn" exact to="/newPhoto">
          Add Photo
        </NavLink>
      </div>
      <div className="feedDiv">
        {photos?.map((photo) => (
          <div className='imgDiv'>
            <img className="imgClass" src={photo.url} />
            {/* <button
              onClick={() => setToEditPhoto(!toEditPhoto)}
              className="del-q-btn"
            >
              Edit Question
            </button> */}
            {photo.caption}
            <button
              onClick={() => handleDelete(photo.id)}
              type="submit"
              className="del-photo-btn"
            >
              Delete Photo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
