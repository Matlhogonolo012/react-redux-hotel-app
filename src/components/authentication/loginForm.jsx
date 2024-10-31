import{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "/src/redux/slices/authSlice.jsx";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(loginUser({ email, password }));
    console.log("Payload:", resultAction.payload);

    if (loginUser.fulfilled.match(resultAction)) {
      const userRole = resultAction.payload.role?.trim().toLowerCase();
      console.log(`User Role from payload: ${userRole}`);

      if (userRole === "admin") {
        console.log("Navigating to: /adminPage");
        navigate("/adminPage");
      } else {
        console.log("Navigating to: /userPage");
        navigate("/userPage");
      }
    } else {
      console.error("Login failed:", resultAction.payload);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
