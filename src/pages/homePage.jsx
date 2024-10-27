import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableRooms } from '../slices/roomSlice';
// import RoomCard from '../components/Common/RoomCard';
import AddToFavoritesButton from '../components/Common/AddToFavoritesButton';

const HomePage = () => {
  const dispatch = useDispatch();
  const { availableRooms, loading } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchAvailableRooms());
  }, [dispatch]);

  if (loading) return <p>Loading rooms...</p>;

  return (
    <div>
      <h1>Available Rooms</h1>
      <div>
        {availableRooms.map(room => (
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
