import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "/src/redux/slices/authSlice.jsx";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const result = await dispatch(signupUser({ email, password, role }));

    if (!error && result.meta.requestStatus === "fulfilled") {
      setSuccessMessage("Account created successfully!");
      setEmail("");
      setPassword("");
      setRole("user");
    }
  };

  useEffect(() => {
    if (error) {
      alert(`Signup failed: ${error}`);
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2 className="form-title">Create an Account</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-input"
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading} className="submit-button">
        Sign Up
      </button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <p className="link-text">
        Already have an account? <Link to="/login" className="signup-link">Log In</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
