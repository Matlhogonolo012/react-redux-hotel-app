import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../slices/authSlice';

const Header = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <header>
      <h1>Hotel App</h1>
      {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : null}
    </header>
  );
};

export default Header;
