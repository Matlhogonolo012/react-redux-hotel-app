import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddRoomForm from "/src/components/dashboard/AddRoomForm.jsx";
import {
  fetchRooms,
  createRoom,
  updateRoom,
  deleteRoom,
} from "/src/redux/slices/roomSlice.jsx";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { availableRooms, loading, error } = useSelector(
    (state) => state.rooms
  );

  const [editingRoom, setEditingRoom] = useState(null);

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

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Room Management</h2>
        {loading && <p>Loading rooms...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {availableRooms.map((room) => (
            <li key={room.id}>
              <strong>{room.name || "Unnamed Room"}</strong>
              <p>Room Type: {room.roomType || "N/A"}</p>
              <p>Bed Type: {room.bedType || "N/A"}</p>
              <p>Capacity: {room.capacity || "N/A"} guests</p>
              <p>Size: {room.size || "N/A"} sq ft</p>
              <p>Price per night: ${room.pricePerNight || "N/A"}</p>
              <p>Max Guests: {room.maxGuests || "N/A"}</p>
              <p>
                Amenities: In-room (
                {room.amenities?.inRoom?.length
                  ? room.amenities.inRoom.join(", ")
                  : "N/A"}
                ), Bathroom (
                {room.amenities?.bathroom?.length
                  ? room.amenities.bathroom.join(", ")
                  : "N/A"}
                ), Other (
                {room.amenities?.otherFeatures?.length
                  ? room.amenities.otherFeatures.join(", ")
                  : "N/A"}
                )
              </p>
              <p>
                Policies: Check-in ({room.policies?.checkIn || "N/A"}),
                Check-out ({room.policies?.checkOut || "N/A"}), Cancellation (
                {room.policies?.cancellationPolicy || "N/A"}), Smoking Allowed (
                {room.policies?.smoking ? "Yes" : "No"})
              </p>
              <p>
                Additional Info: Room Service (
                {room.additionalInfo?.roomService || "N/A"}), Accessibility (
                {room.additionalInfo?.accessibility || "N/A"}), Special Offers (
                {room.additionalInfo?.specialOffers || "N/A"})
              </p>
              <p>
                Photos:
                {room.photos.length > 0 ? (
                  <div>
                    {room.photos.map((photoUrl, index) => (
                      <img
                        key={index}
                        src={photoUrl}
                        alt={`Room photo ${index + 1}`}
                        style={{
                          maxWidth: "100px",
                          height: "auto",
                          marginRight: "10px",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <span>No Photos Available</span>
                )}
              </p>
              <button onClick={() => handleEditRoom(room)}>Edit</button>
              <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{editingRoom ? "Edit Room" : "Add New Room"}</h2>
        <AddRoomForm
          onSubmit={editingRoom ? handleUpdateRoom : handleAddRoom}
          initialData={editingRoom}
        />
      </div>
    </div>
  );
};

export default AdminPage;
