import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import "../Feed/Feed.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CreatePhotoModal from '../CreatePhoto';
import DisplayPhotoModal from '../DisplayPhoto/index'

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const comments = useSelector((state) => Object.values(state.comments));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const history = useHistory();
  const [toEditPhoto, setToEditPhoto] = useState(false);
  const [caption, setCaption] = useState('');

  const cancel = (e) => {
    e.preventDefault();
    setToEditPhoto(!toEditPhoto);
  };

  const handleDelete = (id) => {
    dispatch(deletePhoto(id));
    history.push("/photos");
  };

  const handleEditPhoto = async (id, caption) => {
    const payload = {
      id,
      caption,
    };
    dispatch(editPhoto(payload));
    setToEditPhoto(!toEditPhoto);
  };

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div id="feedMain">
      <div className="addPhotoBtnDiv">

        <CreatePhotoModal />
      </div>
      <div id='feedBackground'>
      <div className="feedDiv">
        {photos?.map((photo) => (
          <div className="imgDiv">
            <div className="pNcDiv">
              <img className="imgClass" src={photo.url} />
              {/* onClick on this image sould open the DisplayPhotoModal*/}
              {/* <DisplayPhotoModal /> */}

              {photo.caption}
              {/* <button onClick={() => <DisplayPhotoModal />}>Details</button> */}
              <div id='edDiv'>
              <button
                onClick={() => setToEditPhoto(!toEditPhoto)}
                className="del-photo-btn"
              >
                Edit
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
              {'/'}
              <button
                onClick={() => handleDelete(photo.id)}
                type="submit"
                className="del-photo-btn"
              >
                Delete
              </button>
              </div>
            </div>
           </div>
        ))}
      </div>
      </div>
      <div className='commentsBackground'>
        <div className='commentsDiv'>
          <p>Comments</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
