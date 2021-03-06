import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createphotoComment } from "../../store/photoComments";
import { useParams } from "react-router-dom";

const PhotoCommentForm = ({setShowModal}) => {
  const [pcontent, setPcontent] = useState("");
  const [pId, setPId] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const {photoId} = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pcontent.length < 1) {
      setErrors(["You must enter in a comment to post it"]);
      return errors;
    }
    if(pcontent.length > 255){
      setErrors(['The comment must be fewer than 255 characters.'])
      return errors;
    }
    const payload = {
      user_id: user.id,
      photo_id: photoId,
      pcontent,
    };
    dispatch(createphotoComment(payload));
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
          onChange={(e) => setPcontent(e.target.value, setPId(photoId))}
          value={pcontent}
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
