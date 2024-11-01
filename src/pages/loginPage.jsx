import LoginForm from "/src/components/authentication/loginForm.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";

const LoginPage = () => {
  return (
    <div>
      <IoMdArrowRoundBack />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
