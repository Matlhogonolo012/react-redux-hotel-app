import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "/src/redux/slices/roomSlice.jsx"; 
import RoomCard from "./roomCard"; 
import "/src/assets/styles/roomList.css";

const RoomList = () => {
  const dispatch = useDispatch();
  const { availableRooms, loading, error } = useSelector((state) => state.rooms);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);


  const filteredRooms = availableRooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="room-list-container">
      <h1>Our Rooms</h1>

      <input
        type="text"
        placeholder="Search rooms..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {loading && <p className="loading">Loading rooms...</p>}
      {error && <p className="error">Error fetching rooms: {error}</p>}

      <ul className="room-list">
        {filteredRooms.length === 0 ? (
          <p>No rooms available.</p>
        ) : (
          filteredRooms.map((room) => (
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
