import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import DisplayPhoto from "./DisplayPhoto";
import "./DisplayPhoto.css";

function DisplayPhotoModal({ photoId }) {
    const [ showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal onClose={() => setShowModal(false)}>
        <DisplayPhoto photoId={photoId} setShowModal={setShowModal} />
      </Modal>
      )
    </>
  );
}

export default DisplayPhotoModal;
