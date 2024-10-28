import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddRoomForm from "/src/components/dashboard/addRoomForm.jsx";

const AdminPage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  const userRole = user?.role?.trim().toLowerCase();

  if (userRole !== "admin") {
    navigate("/userPage");
    return null;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Room Management</h2>
      </div>
      <div>
        <h2>Add New Room</h2>
        <AddRoomForm />
      </div>
    </div>
  );
};

export default AdminPage;
