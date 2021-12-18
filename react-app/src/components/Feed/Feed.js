import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import "../Feed/Feed.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Feed = ({ photo }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const comments = useSelector((state) => Object.values(state.comments))
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const history = useHistory();
  const [toEditPhoto, setToEditPhoto] = useState(false);
  // const [url, setUrl] = useState(photo.url);
  const [caption, setCaption] = useState(photos.caption);

  const cancel = (e) => {
    e.preventDefault();
    setToEditPhoto(!toEditPhoto);
  };

  const handleDelete = (id) => {
    dispatch(deletePhoto(id));
    history.push("/photos");
  };

  const handleEditPhoto = (e) => {
    e.preventDefault();
    const payload = {
      caption,
    };
    dispatch(editPhoto(payload));
    setToEditPhoto(!toEditPhoto);
  };

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
            <div className='pNcDiv'>
            <img className="imgClass" src={photo.url} />
            <div className='commentsDiv'>
              <p>Comments Div</p>
              {comments?.map((comment) => (
                {comment}
              ))}
              </div>
            </div>
            {photo.caption}
            <button
              onClick={() => setToEditPhoto(!toEditPhoto)}
              className="del-photo-btn"
            >
              Edit Photo Caption
            </button>
            {toEditPhoto && (
              <form onSubmit={handleEditPhoto}>
                <input
                  onChange={(e) => setCaption(e.target.value)}
                  value={caption}
                  placeholder="Enter new caption"
                />

                <button className="question-sumbit-btn" type="submit">
                  Update Photo Caption
                </button>
                <button className="cancel-btn" onClick={cancel}>
                  Cancel
                </button>
              </form>
            )}
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
