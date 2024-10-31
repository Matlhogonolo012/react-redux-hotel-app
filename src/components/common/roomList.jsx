import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "/src/redux/slices/roomSlice.jsx"; 
import RoomCard from "./roomCard"; 
import "/src/assets/styles/roomList.css"

const RoomList = () => {
  const dispatch = useDispatch();
  const { availableRooms, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="room-list-container">
      <h1>Available Rooms</h1>
      {loading && <p className="loading">Loading rooms...</p>}
      {error && <p className="error">Error fetching rooms: {error}</p>}
      <ul className="room-list">
        {availableRooms.length === 0 ? (
          <p>No rooms available.</p>
        ) : (
          availableRooms.map((room) => (
            <li key={room.id} className="room-item">
              <RoomCard room={room} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RoomList;
