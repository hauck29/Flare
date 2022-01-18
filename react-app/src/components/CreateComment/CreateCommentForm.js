import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/comments";


const CommentForm = ({setShowModal}) => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

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
      content,
    };
    dispatch(createComment(payload));
    // history.push("/");
    setShowModal(false)
  };

  return (
    <div className="add-photo">
      <ul className='ul'>
        {errors.map((error, idx) => (
          <li className='li' key={idx}>{error}</li>
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
