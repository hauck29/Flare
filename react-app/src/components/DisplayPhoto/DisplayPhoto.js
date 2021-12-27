import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos, getOnePhoto, deletePhoto, editPhoto } from "../../store/photos";

function DisplayPhoto({ photoId, setShowModal }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  console.log("$$$$$$%%%%%%%%%%%%%%%%%#@@@@@@@@@@@@", photos);
  const photo = photos[photoId];
  const [editable, isEditable] = useState(false);
  const [caption, setCaption] = useState(photo.caption);

  const handleEdit = async (id, caption) => {
    dispatch(editPhoto(id, caption));
    isEditable(false);
  };

  const handleDelete = async (id) => {
    dispatch(deletePhoto(id));
    // setShowModal(false);
  };

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <>
      <div id="photo-modal-container">
        <div id="photo-modal-image-container">
          <div id="photo-modal-image-wrapper">
            <div id="inner-div">
              <img src={photo.url} alt="" className="display-photo"></img>
            </div>
          </div>
        </div>
        <div id="photo-modal-right-container">
          <div id="top-right-container" className="right-column-div">
            {photo.user_id === sessionUser.id && (
              <button className="photoBtn" onClick={() => isEditable(true)}>
                Edit
              </button>
            )}{" "}
            {editable && (
              <div className="edit-photo">
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="edit-caption-input"
                  className="textarea"
                />
                <button
                  className="photoBtn"
                  onClick={() => handleEdit(photoId, caption)}
                >
                  Submit
                </button>
                <button className="photoBtn" onClick={() => isEditable(false)}>
                  Cancel
                </button>
              </div>
            )}
            {photo.user_id === sessionUser.id && (
              <button
                className="photoBtn"
                onClick={() => handleDelete(photoId)}
              >
                Delete
              </button>
            )}
          </div>
        </div>

        <div className="right-column-div" id="photo-caption-edit">
          {photo.caption}
        </div>


      </div>
    </>
  );
}
export default DisplayPhoto;
