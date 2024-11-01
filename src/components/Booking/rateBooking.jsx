import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings, addRating, deleteRating } from "/src/redux/slices/ratingSlice.jsx";
import { fetchBookings } from "/src/redux/slices/bookingSlice.jsx";
import { MdStarRate } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";

const RateBooking = () => {
  const dispatch = useDispatch();
  const { bookings, loading: bookingsLoading } = useSelector((state) => state.bookings);
  const { ratings, loading: ratingsLoading } = useSelector((state) => state.ratings);
  const { user } = useSelector((state) => state.auth);
  const [selectedRating, setSelectedRating] = useState({});
  const [selectedComment, setSelectedComment] = useState({});

  useEffect(() => {
    if (user) {
      dispatch(fetchBookings());
      dispatch(fetchRatings(user.uid));
    }
  }, [dispatch, user]);

  const handleRatingChange = (roomId, rating) => {
    setSelectedRating((prev) => ({ ...prev, [roomId]: rating }));
  };

  const handleCommentChange = (roomId, comment) => {
    setSelectedComment((prev) => ({ ...prev, [roomId]: comment }));
  };

  const handleSubmitRating = (roomId) => {
    const rating = selectedRating[roomId];
    const comment = selectedComment[roomId] || "";
    if (rating && user) {
      dispatch(addRating({ roomId, rating, comment, userId: user.uid }));
    }
  };

  const handleDeleteRating = (ratingId) => {
    dispatch(deleteRating(ratingId));
  };

  if (bookingsLoading || ratingsLoading) return <p className="loading-message">Loading your bookings and ratings...</p>;

  return (
    <div className="rating-list">
      <h2>Rate Your Bookings</h2>
      {bookings.map((booking) => {
        const userRating = ratings.find((rating) => rating.roomId === booking.roomId);
        return (
          <div className="rating-item" key={booking.id}>
            <p>Room: {booking.roomName}</p>
            {userRating ? (
              <div>
                <p>Current Rating: {userRating.rating}</p>
                <p>Comment: {userRating.comment}</p>
                <button className="delete-rating-button" onClick={() => handleDeleteRating(userRating.id)}>Delete Rating</button>
              </div>
            ) : (
              <>
                <label>
                <MdStarRate /> Rate:
                  <select
                    className="rating-select"
                    value={selectedRating[booking.roomId] || ""}
                    onChange={(e) => handleRatingChange(booking.roomId, e.target.value)}
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </label> <FaCommentDots />
                <textarea
                  className="comment-textarea"
                  placeholder="Add a comment"
                  value={selectedComment[booking.roomId] || ""}
                  onChange={(e) => handleCommentChange(booking.roomId, e.target.value)}
                />
                <button className="submit-rating-button" onClick={() => handleSubmitRating(booking.roomId)}>Submit Rating</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RateBooking;
