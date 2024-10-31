import { useLocation, useNavigate } from "react-router-dom";
import "/src/assets/styles/confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkInDate, checkOutDate, guestCount, room } = location.state || {};

  if (!room) {
    return <p>No booking details available.</p>;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <h3>Room Details</h3>
      <p>
        <strong>Room Name:</strong> {room.name}
      </p>
      <p>
        <strong>Check-In Date:</strong> {checkInDate}
      </p>
      <p>
        <strong>Check-Out Date:</strong> {checkOutDate}
      </p>
      <p>
        <strong>Number of Guests:</strong> {guestCount}
      </p>
      <h4>Thank you for your booking!</h4>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default Confirmation;
