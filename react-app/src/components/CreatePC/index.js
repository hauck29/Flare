import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import PhotoCommentForm from './CreatePhotoCommentForm';
import './CreateCommentForm.css'

function CreatePhotoCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='postBtn' onClick={() => setShowModal(true)}>Post A New Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PhotoCommentForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreatePhotoCommentModal;
