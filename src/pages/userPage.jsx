import React from 'react';
import { useSelector } from 'react-redux';
import BookingList from '../components/Booking/bookingList';
import Favorites from '../components/Booking/Favorites';
import RateBooking from '../components/Booking/RateBooking';

const UserPage = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);

  if (!isAuthenticated) return <p>Please login to view your profile.</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <div>
        <h2>Your Bookings</h2>
        <BookingList />
      </div>
      <div>
        <h2>Your Favorites</h2>
        <Favorites />
      </div>
      <div>
        <h2>Rate Your Bookings</h2>
        <RateBooking />
      </div>
    </div>
  );
};

export default UserPage;
