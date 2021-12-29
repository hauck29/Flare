import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/comments";
import { useHistory } from "react-router-dom";

const CommentForm = () => {
  const [content, setContent] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
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
    const payload = {
      user_id: user.id,
      content,
    };
    dispatch(createComment(payload));
    history.push("/");
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
export default CommentForm;
