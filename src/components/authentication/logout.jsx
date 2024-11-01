import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { logoutUser } from "/src/redux/slices/authSlice.jsx";
import { useDispatch } from "react-redux";
import "/src/assets/styles/logout.css"

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logoutUser());
  };

  return (
    <div className="logout-container">
      <button className="logout-button" onClick={handleLogout}>
        <TbLogout />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Logout;
