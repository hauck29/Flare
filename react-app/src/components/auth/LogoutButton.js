import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import '../auth/LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='navElement' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
