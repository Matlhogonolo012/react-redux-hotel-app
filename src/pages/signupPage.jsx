import SignupForm from '/src/components/authentication/signUpForm.jsx';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div>
    <Link to="/" className="back-link">
      <IoMdArrowRoundBack />
    </Link>
    
  
      <SignupForm />
    </div>
  );
};

export default SignupPage;
