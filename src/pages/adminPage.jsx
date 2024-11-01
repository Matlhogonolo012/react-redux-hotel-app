import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddRoomForm from "/src/components/dashboard/AddRoomForm.jsx";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  fetchRooms,
  createRoom,
  updateRoom,
  deleteRoom,
} from "/src/redux/slices/roomSlice.jsx";
import Logout from "../components/authentication/logout";
import "/src/assets/styles/admin.css";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { availableRooms, loading, error } = useSelector(
    (state) => state.rooms
  );

  const [editingRoom, setEditingRoom] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (user?.role?.trim().toLowerCase() === "admin") {
      dispatch(fetchRooms());
    } else {
      navigate("/userPage");
    }
  }, [isAuthenticated, user, navigate, dispatch]);

  if (!isAuthenticated) return <div>Loading...</div>;

  const handleAddRoom = (newRoomData) => {
    dispatch(createRoom(newRoomData));
  };

  const handleUpdateRoom = (updatedData) => {
    if (editingRoom) {
      dispatch(updateRoom({ id: editingRoom.id, updatedData }));
      setEditingRoom(null);
    }
  };

  const handleDeleteRoom = (id) => {
    dispatch(deleteRoom(id));
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
  };

  
  const filteredRooms = availableRooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>
      <Logout />
      <h2 className="form-title">{editingRoom ? "Edit Room" : "Add New Room"}</h2>
      
      <AddRoomForm
          onSubmit={editingRoom ? handleUpdateRoom : handleAddRoom}
          initialData={editingRoom}
      />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search rooms..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="room-management">
        <h2 className="management-title">Room Management</h2>
        {loading && <p>Loading rooms...</p>}
        {error && <p className="error-message">Error: {error}</p>}
        <ul className="room-list">
          {filteredRooms.length === 0 ? (
            <p>No rooms available.</p>
          ) : (
            filteredRooms.map((room) => (
              <li key={room.id} className="room-item">
                <strong className="room-name">{room.name || "Unnamed Room"}</strong>
                <p>Room Type: {room.roomType || "N/A"}</p>
                <p>Bed Type: {room.bedType || "N/A"}</p>
                <p>Capacity: {room.capacity || "N/A"} guests</p>
                <p>Size: {room.size || "N/A"} sq ft</p>
                <p>Price per night: ${room.pricePerNight || "N/A"}</p>
                <p>Max Guests: {room.maxGuests || "N/A"}</p>
                <p>Amenities: In-room (
                  {room.amenities?.inRoom?.length ? room.amenities.inRoom.join(", ") : "N/A"}
                )</p>
                <p>{room.smokingAllowed ? "Smoking is allowed." : "Smoking is not allowed."}</p>

                <div className="room-photos">
                  <span>Photos:</span>
                  {room.photos.length > 0 ? (
                    <div className="photo-gallery">
                      {room.photos.map((photoUrl, index) => (
                        <img
                          key={index}
                          src={photoUrl}
                          alt={`Room photo ${index + 1}`}
                          className="room-photo"
                        />
                      ))}
                    </div>
                  ) : (
                    <span>No Photos Available</span>
                  )}
                </div>
                <p className={`availability ${room.isAvailable ? 'available' : 'not-available'}`}>
                  {room.isAvailable ? "Room is Available" : "Room is Not Available"}
                </p>
                <div className="room-actions">
                  <button className="edit-button" onClick={() => handleEditRoom(room)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteRoom(room.id)}>
                    <MdDeleteForever /> Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="form-section"></div>
    </div>
  );
};

export default AdminPage;
