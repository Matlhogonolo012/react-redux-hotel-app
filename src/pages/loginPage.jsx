import LoginForm from "/src/components/authentication/loginForm.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <Link to="/" className="back-link">
        <IoMdArrowRoundBack />
      </Link>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
