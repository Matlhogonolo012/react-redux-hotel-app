import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (isAuthenticated) navigate('/user');

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
