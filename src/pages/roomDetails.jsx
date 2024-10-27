import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomDetails } from '../slices/roomSlice';
import BookingForm from '../components/Booking/BookingForm';
import { useParams } from 'react-router-dom';

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const room = useSelector(state => state.rooms.availableRooms.find(r => r.id === roomId));

  useEffect(() => {
    if (!room) dispatch(fetchRoomDetails(roomId));
  }, [dispatch, roomId, room]);

  if (!room) return <p>Loading room details...</p>;

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Price per night: ${room.price}</p>
      <BookingForm roomId={roomId} />
    </div>
  );
};

export default RoomDetailsPage;
