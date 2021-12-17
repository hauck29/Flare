import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photo = useSelector((state) => Object.values(state.photos));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div>
      <h1>Photos</h1>
      <button></button>
      {photo?.map((photo) => (
        <img src={photo.url} />

      ))}
    </div>
  );
};

export default Feed;
