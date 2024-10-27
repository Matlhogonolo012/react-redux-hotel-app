import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RoomManagement from '../components/Dashboard/RoomManagement';
// import AddRoomForm from '../components/Dashboard/AddRoomForm';

const AdminPage = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();

  if (!isAuthenticated || !user.isAdmin) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Room Management</h2>
        <RoomManagement />
      </div>
      <div>
        <h2>Add New Room</h2>
        <AddRoomForm />
      </div>
    </div>
  );
};

export default AdminPage;
