import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import UploadForm from './CreatePhotoForm';
import './CreatePhotoForm.css'

function CreatePhotoModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='postBtn' onClick={() => setShowModal(true)}>Post A Photo</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreatePhotoModal;
