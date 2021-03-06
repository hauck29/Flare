import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPhoto } from "../../store/photos";

const UploadForm = ({setShowModal}) => {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (url.length < 1) {
    //   setErrors(["You must enter in a valid URL to post a photo"]);
    //   return errors;
    // }
    // if(!/\.(jpe?g|png|gif|bmp)$/i.test(url)){
    //   setErrors(['Must be a valid image url format (.jpeg, .png, .gif, .bmp']);
    //   return errors;
    // }
    if(caption.length > 255){
      setErrors(['The photo caption must be fewer than 255 characters.'])
      return errors;
    }
    // if(url.length > 255){
    //   setErrors(['The photo url must be fewer than 255 characters.'])
    //   return errors;
    // }

    const formData = new FormData();
    formData.append('image', url);
    formData.append('user_id', user.id);
    formData.append('caption', caption);

    // const payload = {
    //   user_id: user.id,
    //   url,
    //   caption,
    // };
    dispatch(createPhoto(formData));
    // history.push("/");
    setShowModal(false);
  };

  return (
    <div className="add-photo">
      <ul className='ul'>
        {errors.map((error, idx) => (
          <li className='li' key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='file' accept='.jpg, .jpeg, .png, .gif' onChange={(e) => setUrl(e.target.files[0])}></input>
        {/* <input className='loginInput'
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Photo URL"
        /> */}
        <textarea className='loginInput'
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          placeholder="Photo Caption"
        />
        <div className="add-p-btns">
          <button className="loginBtn" type="submit">
            Add Photo
          </button>
          {/* <button className="loginBtn" onClick={cancel}>
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};
export default UploadForm;
