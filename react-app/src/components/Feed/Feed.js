import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import {
  getComments,
  createComment,
  deleteComment,
  editComment,
} from "../../store/comments";
import "../Feed/Feed.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CreatePhotoModal from "../CreatePhoto";
import CreateCommentModal from "../CreateComment";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const comments = useSelector((state) => Object.values(state.comments));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const history = useHistory();
  const [toEditPhoto, setToEditPhoto] = useState(false);
  const [caption, setCaption] = useState("");

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
    dispatch(getPhotos(), dispatch(getComments()));
  }, [dispatch]);

  return (
    <div id="feedMain">
      <div id="feedBackground">
        <div className="addPhotoBtnDiv">
          <CreatePhotoModal />
        </div>
        <div className="feedDiv">
          {photos?.reverse().map((photo) => (
            <div className="imgDiv">
              <div className="pNcDiv">
                <img className="imgClass" src={photo.url} />
                {photo.caption}
                <div id="edDiv">
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
                  {"/"}
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
      <div className="commentsBackground">
        <div className="createCommentDiv">
          <CreateCommentModal />
          <div className="commentsDiv">
            {comments?.reverse().map((comment) => (
              <div className='commentDiv'>
              {comment.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
