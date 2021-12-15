import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import Photo from "./photo";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photos));
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");
};
useEffect(() => {
  dispatch(getPhotos());
}, [dispatch]);

return (
  <div>
    {photos?.map(({ id, url, user_id, caption }) => (
      <Photo id={id} url={url} user_id={user_id} caption={caption} />
    ))}
  </div>
);

export default Feed;
