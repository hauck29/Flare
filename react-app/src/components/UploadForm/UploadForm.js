import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPhoto } from "../../store/photos";
import { useHistory } from "react-router-dom";

const UploadPhoto = () => {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  const cancel = (e) => {
    e.preventDefault();
    history.push("/photos");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.length < 1) {
      setErrors(["You must enter in a valid URL to post a photo"]);
      return errors;
    }
    const payload = {
      user_id: user.id,
      url,
      caption,
    };
    dispatch(createPhoto(payload));
    history.push("/photos");
  };

  return (
    <div className="add-photo">
      <h3>Add A Photo</h3>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Photo URL"
        />
        <input
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          placeholder="Photo Caption"
        />
        <div className="add-p-btns">
          <button className="photo-sumbit-btn" type="submit">
            Add Photo
          </button>
          <button className="cancel-btn" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default UploadPhoto;
