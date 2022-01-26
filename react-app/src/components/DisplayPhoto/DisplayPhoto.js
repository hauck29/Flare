import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import { NavLink, useHistory } from "react-router-dom";
import "./DisplayPhoto.css";
import { getPhotoComments, deletephotoComment, editphotoComment } from "../../store/photoComments";
import recycleIcon from "../Feed/recycle.png";
import editIcon from "../Feed/edit.png";
import CreatePhotoCommentModal from '../CreatePC'

function DisplayPhoto({ photoId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos(), dispatch(getPhotoComments()));
  }, [dispatch]);
  const photos = useSelector((state) => state.photos);
  const photoComments = useSelector((state) =>
    Object.values(state.photoComments)
  );
  const photoCommentsObj = useSelector((state) => state.photoComments);

  const [toEditPhotoComment, setToEditPhotoComment] = useState(false);

  const photo = photos[photoId];
  const [pcontent, setPcontent] = useState("");
  const [photoCommentId, setPhotoCommentId] = useState("");
  console.log("$$$$$$$$$$", photos, photo);

  const cancelPhotoComment = (e) => {
    e.preventDefault();
    setToEditPhotoComment(!toEditPhotoComment);
  };

  const handleEditPhotoComment = async (id, pcontent) => {
    const payload = {
      id,
      pcontent,
    };
    dispatch(editphotoComment(payload));
    setToEditPhotoComment(!toEditPhotoComment);
  };

  const handleDeletePhotoComment = (id) => {
    dispatch(deletephotoComment(id));
  };

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
      <div className="createCommentDivB">
        <CreatePhotoCommentModal />
        <div clasName="commentsDivB">
          {photoComments?.reverse().map((photoComment) => (
            <div className="commentDivB" key={photoComment.id}>
              {photoComment.pcontent}
              {sessionUser.id === photoComment.user_id && (
                          <button
                            onClick={() => {
                              //input population issue
                              setPcontent(photoCommentsObj[photoComment.id].pcontent);
                              setToEditPhotoComment(!toEditPhotoComment);
                              setPhotoCommentId(photoComment.id);
                            }}
                            className="del-photo-btn"
                          >
                            <img
                              className="recIcon"
                              src={editIcon}
                              alt=""
                            ></img>
                          </button>
                        )}
                        {photoCommentId === photoComment.id
                          ? toEditPhotoComment && (
                              <form
                                onSubmit={() => {
                                  handleEditPhotoComment(photoComment.id, pcontent);
                                }}
                              >
                                <input
                                  className="updateBarInput"
                                  onChange={(e) => setPcontent(e.target.value)}
                                  value={pcontent}
                                />

                                <button className="postBtn" type="submit">
                                  Update Comment
                                </button>
                                <button
                                  className="postBtn"
                                  onClick={cancelPhotoComment}
                                >
                                  Cancel
                                </button>
                              </form>
                            )
                          : null}
              {sessionUser.id === photoComment.user_id && (
                <button
                  onClick={() => handleDeletePhotoComment(photoComment.id)}
                  type="submit"
                  className="del-photo-btn"
                >
                  <img className="recIcon" src={recycleIcon} alt=""></img>
                </button>
              )}
            </div>
          ))}

        </div>
      </div>
    </>
  );
  //   return <img src={photo.url} alt=""></img>;
}

export default DisplayPhoto;
