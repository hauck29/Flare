import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CommentForm from './CreateCommentForm';
import './CreateCommentForm.css'

function CreateCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='postBtn' onClick={() => setShowModal(true)}>Post To Chat</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
