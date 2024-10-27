import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../slices/bookingSlice';

const BookingList = () => {
  const dispatch = useDispatch();
  const { bookings, loading } = useSelector(state => state.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {bookings.map(booking => (
        <div key={booking.id}></div>
      ))}
    </div>
  );
};

export default BookingList;
