import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "/src/redux/slices/authSlice.jsx";

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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading}>
        Sign Up
      </button>
      {successMessage && <p>{successMessage}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default RegisterForm;
