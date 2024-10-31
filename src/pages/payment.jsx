import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PaymentPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem("bookingDetails"));
    if (!storedBooking) {
      alert("No booking details found. Please book a room first.");
      navigate("/BookingForm");
    } else {
      setBookingDetails(storedBooking);
    }
  }, [navigate]);

  if (!user || !bookingDetails) {
    return <p>Loading...</p>;
  }

  const { roomName, totalPrice, checkInDate, checkOutDate, guestCount } = bookingDetails;

  const paymentAmount = totalPrice.toFixed(2);

  const handleGoToConfirmation = () => {
    navigate("/confirmation", {
      state: { checkInDate, checkOutDate, guestCount, room: { name: roomName, price: totalPrice } },
    });
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <h3>Room Details</h3>
      <p><strong>Room Name:</strong> {roomName}</p>
      <p><strong>Check-In Date:</strong> {checkInDate}</p>
      <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
      <p><strong>Number of Guests:</strong> {guestCount}</p>
      <h4>Total Amount to Pay: R{paymentAmount}</h4>

      <PayPalScriptProvider options={{ "client-id": "AcFIfsL5dtM6rXxjSddZpMlkO-r_dhpYH6ICeYQe7RQT9YO7NtqTck6mr-uZqR1S-7knxjdVN0iRLvvi" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: paymentAmount,
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              await actions.order.capture();
              setPaymentSuccess(true);
              handleGoToConfirmation();
            } catch (error) {
              setFormError('Payment failed. Please try again.');
              console.error(error);
            }
          }}
          onError={(error) => {
            setFormError('Payment failed. Please try again.');
            console.error(error);
          }}
        />
      </PayPalScriptProvider>

      {formError && <p className="error-message">{formError}</p>}
      {paymentSuccess && (
        <div className="success-message">
          <p>Payment successful!</p>
          <button onClick={handleGoToConfirmation}>Proceed to Confirmation</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
