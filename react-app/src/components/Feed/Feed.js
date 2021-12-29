import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, deletePhoto, editPhoto } from "../../store/photos";
import { getComments, deleteComment, editComment } from "../../store/comments";
import "../Feed/Feed.css";
import { useHistory } from "react-router-dom";
import CreatePhotoModal from "../CreatePhoto";
import CreateCommentModal from "../CreateComment";
import recycleIcon from "./recycle.png";
import editIcon from "./edit.png";
import githubLogo from "../SplashPage/githubLogo.png";
import linkedInLogo from "../SplashPage/linkedInLogo.png";
import { NavLink } from "react-router-dom";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const comments = useSelector((state) => Object.values(state.comments));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const [commentId, setCommentId] = useState("");
  const history = useHistory();
  const [toEditPhoto, setToEditPhoto] = useState(false);
  const [toEditComment, setToEditComment] = useState(false);
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");

  const cancel = (e) => {
    e.preventDefault();
    setToEditPhoto(!toEditPhoto);
  };
  const cancelComment = (e) => {
    e.preventDefault();
    setToEditComment(!toEditComment);
  };

  const handleDelete = (id) => {
    dispatch(deletePhoto(id));
    history.push("/");
  };
  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
    history.push("/");
  };

  const handleEditPhoto = async (id, caption) => {
    const payload = {
      id,
      caption,
    };
    dispatch(editPhoto(payload));
    setToEditPhoto(!toEditPhoto);
  };

  const handleEditComment = async (id, content) => {
    const payload = {
      id,
      content,
    };
    dispatch(editComment(payload));
    setToEditComment(!toEditComment);
  };

  useEffect(() => {
    dispatch(getPhotos(), dispatch(getComments()));
  }, [dispatch]);


  if (sessionUser) {
    return (
      <>
        <div className="pageDiv">
          <div className="welcomeMessage">
            <div className="welcomeWrap">Welcome {sessionUser?.username}</div>
          </div>
          <div className="usersLinkDiv">
            <NavLink
              className="usersElementBox"
              to="/users"
              exact={true}
              activeClassName="active"
            >
              Users
            </NavLink>
          </div>
          <div id="feedMain">
            <div id="feedBackground">
              <div className="addPhotoBtnDiv">
                <CreatePhotoModal />
              </div>
              <div className="feedDiv">
                {photos?.reverse().map((photo) => (
                  <div className="imgDiv" key={photo.id}>
                    <div className="pNcDiv">
                      <img className="imgClass" src={photo.url} />
                      <div className="belowPicDiv">
                        <p className="captionTag">{photo.caption}</p>
                        <div id="edDiv">
                          <button
                            onClick={() => {
                              setToEditPhoto(!toEditPhoto);
                              setPhotoId(photo.id);
                            }}
                            className="del-photo-btn"
                          >
                            <img className="recIcon" src={editIcon}></img>
                          </button>
                          {photoId === photo.id
                            ? toEditPhoto && (
                                <form
                                  onSubmit={() => {
                                    handleEditPhoto(photo.id, caption);
                                  }}
                                >
                                  <input
                                    className="updateBarInput"
                                    onChange={(e) => setCaption(e.target.value)}
                                    value={caption}
                                    placeholder="Enter new caption"
                                  />

                                  <button className="postBtn" type="submit">
                                    Update Photo Caption
                                  </button>
                                  <button className="postBtn" onClick={cancel}>
                                    Cancel
                                  </button>
                                </form>
                              )
                            : null}{" "}
                          <button
                            onClick={() => handleDelete(photo.id)}
                            type="submit"
                            className="del-photo-btn"
                          >
                            <img className="recIcon" src={recycleIcon}></img>
                          </button>
                        </div>
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
                    <div className="commentDiv" key={comment.id}>
                      {comment.content}
                      <div>
                        <button
                          onClick={() => {
                            setToEditComment(!toEditComment);
                            setCommentId(comment.id);
                          }}
                          className="del-photo-btn"
                        >
                          <img className="recIcon" src={editIcon}></img>
                        </button>
                        {commentId === comment.id
                          ? toEditComment && (
                              <form
                                onSubmit={() => {
                                  handleEditComment(comment.id, content);
                                }}
                              >
                                <input
                                  className="updateBarInput"
                                  onChange={(e) => setContent(e.target.value)}
                                  value={content}
                                  // placeholder={comment.content}
                                />

                                <button className="postBtn" type="submit">
                                  Update Comment
                                </button>
                                <button
                                  className="postBtn"
                                  onClick={cancelComment}
                                >
                                  Cancel
                                </button>
                              </form>
                            )
                          : null}
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          type="submit"
                          className="del-photo-btn"
                        >
                          <img className="recIcon" src={recycleIcon}></img>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bottomBorder">
            <p className="credits"> © 2021 Tony Hauck</p>
            <a href="https://github.com/hauck29">
              <img className="gLogo" src={githubLogo}></img>
            </a>
            <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
              <img className="lLogo" src={linkedInLogo}></img>
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Feed;
