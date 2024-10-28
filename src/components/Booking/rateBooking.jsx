import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings, addRating } from "/src/redux/slices/ratingSlice.jsx";
import { fetchBookings } from "/src/redux/slices/bookingSlice.jsx";

const RateBooking = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const { ratings, loading } = useSelector((state) => state.ratings);
  const { user } = useSelector((state) => state.auth);
  const [selectedRating, setSelectedRating] = useState({});

  useEffect(() => {
    if (user) {
      dispatch(fetchBookings(user.id));
      dispatch(fetchRatings(user.id));
    }
  }, [dispatch, user]);

  const handleRatingChange = (roomId, rating) => {
    setSelectedRating((prev) => ({ ...prev, [roomId]: rating }));
  };

  const handleSubmitRating = (roomId) => {
    const rating = selectedRating[roomId];
    if (rating && user) {
      dispatch(addRating({ roomId, rating, userId: user.id }));
    }
  };

  if (loading) return <p>Loading your ratings...</p>;

  return (
    <div>
      <h2>Rate Your Bookings</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Room: {booking.roomName}</p>
          <label>
            Rate:
            <select
              value={selectedRating[booking.roomId] || ""}
              onChange={(e) =>
                handleRatingChange(booking.roomId, e.target.value)
              }
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
          <button onClick={() => handleSubmitRating(booking.roomId)}>
            Submit Rating
          </button>
        </div>
      ))}
    </div>
  );
};

export default RateBooking;
