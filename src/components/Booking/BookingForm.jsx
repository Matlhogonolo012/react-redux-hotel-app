// src/components/Booking/BookingForm.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../slices/bookingSlice';
import { calculateDaysBetween, formatDate } from '../../utils/dateUtils';
import { calculateTotalPrice, applyDiscount } from '../../utils/priceUtils';

const BookingForm = ({ room }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [guestCount, setGuestCount] = useState(1);
  const [discountPercentage, setDiscountPercentage] = useState(0); // Default no discount

  // Calculate total days and price when dates change
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const days = calculateDaysBetween(checkInDate, checkOutDate);
      setTotalDays(days);

      let calculatedPrice = calculateTotalPrice(room.pricePerNight, days);

      // Apply discount if there is one
      if (discountPercentage > 0) {
        calculatedPrice = applyDiscount(calculatedPrice, discountPercentage);
      }

      setTotalPrice(calculatedPrice);
    }
  }, [checkInDate, checkOutDate, room.pricePerNight, discountPercentage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to book a room.");

    const bookingData = {
      roomId: room.id,
      userId: user.id,
      roomName: room.name,
      guestCount,
      checkInDate: formatDate(checkInDate),
      checkOutDate: formatDate(checkOutDate),
      totalDays,
      totalPrice,
    };

    dispatch(addBooking(bookingData));
    alert('Booking successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book {room.name}</h2>
      <label>
        Check-In Date:
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </label>
      <label>
        Check-Out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          min="1"
          max={room.maxGuests}
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          required
        />
      </label>
      <label>
        Discount Percentage:
        <input
          type="number"
          min="0"
          max="100"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(Number(e.target.value))}
        />
      </label>
      <p>Total Days: {totalDays}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
