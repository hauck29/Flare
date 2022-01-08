import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createphotoComment } from "../../store/photoComments";
import { useHistory } from "react-router-dom";

const PhotoCommentForm = ({setShowModal}) => {
  const [content, setContent] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const photos = useSelector((state) => state.photos);
  const [errors, setErrors] = useState([]);

  const cancel = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 1) {
      setErrors(["You must enter in a comment to post it"]);
      return errors;
    }
    if(content.length > 255){
      setErrors(['The comment must be fewer than 255 characters.'])
      return errors;
    }
    const payload = {
      user_id: user.id,
      // photo_id: photo.id,
      content,
    };
    dispatch(createphotoComment(payload));
    // history.push("/");
    setShowModal(false)
  };

  return (
    <div className="add-photo">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input className='loginInput'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Enter a Comment"
        />

        <div className="add-p-btns">
          <button className="loginBtn" type="submit">
            Add Comment
          </button>

        </div>
      </form>
    </div>
  );
};
export default PhotoCommentForm;
