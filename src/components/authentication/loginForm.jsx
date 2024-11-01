import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "/src/redux/slices/authSlice.jsx";
import "/src/assets/styles/login-signup.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    console.log("Booking Details:", bookingDetails);
    setIsBooking(!!bookingDetails);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login:", { email, password });
  
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
  
      if (loginUser.fulfilled.match(resultAction)) {
        const userRole = resultAction.payload?.role?.trim().toLowerCase();
        console.log("User Role:", userRole);
  
        // Block admin users from booking and redirect them to the admin page
        if (userRole === "admin") {
          if (isBooking) {
            alert("Admins cannot proceed with bookings. Redirecting to the admin page.");
          } else {
            alert("Welcome, Admin. Redirecting to the admin page.");
          }
          navigate("/adminPage");
          return;
        }
  
        console.log("Is Booking:", isBooking);
  
        // Handle non-admin users with a booking in progress
        if (isBooking) {
          const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
          if (bookingDetails && Object.keys(bookingDetails).length > 0) {
            alert("Redirecting to payment page for your booking.");
            navigate("/payment");
            localStorage.removeItem("bookingDetails");
          } else {
            alert("Booking details are missing or invalid. Redirecting to user page.");
            navigate("/userPage");
          }
        } else {
          navigate("/userPage");
        }
      } else {
        console.error("Login failed:", resultAction.payload || "No payload returned");
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      console.error("An unexpected error occurred during login:", err);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="form-title">Welcome Back</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-input"
        placeholder="Password"
      />
      <button type="submit" disabled={loading} className="submit-button">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
      <p className="link-text">
        Don't have an account?{" "}
        <Link to="/signupPage" className="signup-link">
          Sign Up
        </Link>
      </p>
      <Link to="/forgotPassword" className="forgot-password-link">
        Forgot Password?
      </Link>
    </form>
  );
};

export default LoginForm;
