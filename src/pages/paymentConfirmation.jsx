import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from '/src/redux/slices/bookingSlice.jsx';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const { bookingDetails } = useSelector(state => state.bookings);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!bookingDetails) navigate('/');
  //   return () => dispatch(clearCart()); // Clear cart once confirmed
  // }, [bookingDetails, navigate, dispatch]);

  // if (!bookingDetails) return null;

  return (
    <div>
      <h1>Payment Successful!</h1>
      {/* <p>Booking ID: {bookingDetails.id}</p>
      <p>Room: {bookingDetails.roomName}</p>
      <p>Total Amount: ${bookingDetails.total}</p>
  */}  </div> 
  );
};

export default PaymentConfirmation;
