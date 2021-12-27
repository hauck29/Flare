import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CreateCommentForm';
import './CreateCommentForm.css'

function CreateCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='postBtn' onClick={() => setShowModal(true)}>Post A New Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm />
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
