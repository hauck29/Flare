import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import SignUpForm from './SignUpForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='loginBtn' onClick={() => setShowModal(true)}>Create An Account Here</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
