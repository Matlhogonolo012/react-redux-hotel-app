import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "/src/redux/slices/roomSlice.jsx";
import BookingForm from "../components/Booking/BookingForm";
import { useParams } from "react-router-dom";

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const room = useSelector((state) =>
    state.rooms.availableRooms.find((room) => room.id === roomId)
  );

  useEffect(() => {
    if (!room) {
      dispatch(fetchRooms());
    }
  }, [dispatch, roomId, room]);

  if (!room) {
    return <p>Loading room details...</p>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Price per night: ${room.pricePerNight}</p>
      <BookingForm room={room} />
    </div>
  );
};

export default RoomDetailsPage;
