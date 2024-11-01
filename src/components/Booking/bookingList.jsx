import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "/src/redux/slices/bookingSlice.jsx";
import { addFavoriteRoom } from "/src/redux/slices/favoriteSlice.jsx";
import { IoIosHeart } from "react-icons/io";

const BookingList = () => {
  const dispatch = useDispatch();
  const { bookings, loading } = useSelector((state) => state.bookings);
  const { favoriteRooms } = useSelector((state) => state.favorites);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchBookings());
    }
  }, [dispatch, user]);

  if (loading) return <p className="loading-message">Loading...</p>;

  return (
    <div className="booking-list">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-item" key={booking.id}>
            <p>Booking ID: {booking.id}</p>
            <p>Room Name: {booking.roomName}</p>
            <p>Check-in Date: {booking.checkInDate}</p>
            <p>Check-out Date: {booking.checkOutDate}</p>
            <button
              className="favorite-button"
              onClick={() => {
                const isFavorite = favoriteRooms.some((room) => room.id === booking.id);
                if (!isFavorite) {
                  const favoriteData = {
                    id: booking.id,
                    name: booking.roomName,
                    userId: user.uid,
                  };
                  dispatch(addFavoriteRoom(favoriteData));
                }
              }}
            >
              Add to Favorites <IoIosHeart />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;
