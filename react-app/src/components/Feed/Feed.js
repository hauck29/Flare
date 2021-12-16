import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import Photo from "./photo";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState("");

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div>
      {photos?.map((photo) => (
        <Photo photo={photo} />
      ))}
    </div>
  );
};

export default Feed;
