import { useEffect } from "react";
import LoginForm from "/src/components/authentication/loginForm.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
