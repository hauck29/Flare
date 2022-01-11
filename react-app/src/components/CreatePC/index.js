import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import PhotoCommentForm from './CreatePhotoCommentForm';
import './CreateCommentForm.css'

function CreatePhotoCommentModal({photoId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='postBtn' onClick={() => setShowModal(true)}>Post A New Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PhotoCommentForm photoId={photoId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreatePhotoCommentModal;
