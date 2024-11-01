import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { logoutUser } from "/src/redux/slices/authSlice.jsx";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logoutUser());
  };

  return (
    <div>
      <button onClick={handleLogout}>
        <TbLogout />
      </button>
      <Link to="/login">Logout</Link>
    </div>
  );
}

export default Logout;
