import SignupForm from '/src/components/authentication/signUpForm.jsx';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
const SignupPage = () => {
  return (
    <div>
       <Link to= "/"><IoMdArrowRoundBack />
       </Link>
    
      <h1>Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
