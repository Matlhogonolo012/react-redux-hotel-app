import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "/src/redux/slices/roomSlice.jsx";
import RoomCard from "/src/components/common/roomCard.jsx";
import AddToFavoritesButton from "/src/components/common/addToFavoratesButton.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const { availableRooms, loading } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <p>Loading rooms...</p>;

  return (
    <div>
      <h1>Available Rooms</h1>
      <div>
        {availableRooms.map((room) => (
          <div key={room.id}>
            <RoomCard room={room} />
            <AddToFavoritesButton room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
