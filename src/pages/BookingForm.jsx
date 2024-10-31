import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "/src/redux/slices/bookingSlice.jsx";
import { fetchRooms } from "/src/redux/slices/roomSlice.jsx";
import { calculateDaysBetween, formatDate } from "../utils/dateUtils";
import { calculateTotalPrice } from "../utils/priceUtils";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { availableRooms, loading, error } = useSelector(
    (state) => state.rooms
  );
  const { user } = useSelector((state) => state.auth);

  const [selectedRoom, setSelectedRoom] = useState(() => {
    const savedRoom = localStorage.getItem("selectedRoom");
    return savedRoom ? JSON.parse(savedRoom) : null;
  });
  const [checkInDate, setCheckInDate] = useState(
    () => localStorage.getItem("checkInDate") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    () => localStorage.getItem("checkOutDate") || ""
  );
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [guestCount, setGuestCount] = useState(() => {
    const savedGuestCount = localStorage.getItem("guestCount");
    return savedGuestCount ? Number(savedGuestCount) : 1;
  });

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const days = calculateDaysBetween(checkInDate, checkOutDate);
      setTotalDays(days);

      try {
        const calculatedPrice = calculateTotalPrice(
          selectedRoom?.pricePerNight || 0,
          days
        );
        setTotalPrice(calculatedPrice);
      } catch (error) {
        console.error("Error calculating price:", error.message);
        setTotalPrice(0);
      }
    }
  }, [checkInDate, checkOutDate, selectedRoom]);

  useEffect(() => {
    if (selectedRoom) {
      localStorage.setItem("selectedRoom", JSON.stringify(selectedRoom));
    }
  }, [selectedRoom]);

  useEffect(() => {
    localStorage.setItem("checkInDate", checkInDate);
    localStorage.setItem("checkOutDate", checkOutDate);
    localStorage.setItem("guestCount", guestCount);
  }, [checkInDate, checkOutDate, guestCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to book a room.");
      navigate("/login");
      return;
    }

    const userRole = user.role?.trim().toLowerCase();
    if (userRole === "admin") {
      alert("Admins cannot book rooms.");
      navigate("/BookingForm");
      return;
    }

    if (!selectedRoom) return alert("Please select a room.");

    const bookingData = {
      roomId: selectedRoom.id,
      userId: user.id,
      roomName: selectedRoom.name,
      guestCount,
      checkInDate: formatDate(checkInDate),
      checkOutDate: formatDate(checkOutDate),
      totalDays,
      totalPrice,
    };

    dispatch(addBooking(bookingData))
      .then(() => {
        alert("Booking successful!");
        localStorage.setItem("bookingDetails", JSON.stringify(bookingData));
        localStorage.removeItem("selectedRoom");
        localStorage.removeItem("checkInDate");
        localStorage.removeItem("checkOutDate");
        localStorage.removeItem("guestCount");
        navigate("/payment");
      })
      .catch((error) => {
        alert("Error while booking. Please try again.");
        console.error("Booking error:", error);
        localStorage.removeItem("selectedRoom");
        localStorage.removeItem("checkInDate");
        localStorage.removeItem("checkOutDate");
        localStorage.removeItem("guestCount");
      });
  };

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error fetching rooms: {error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Room</h2>

      <label>
        Select Room:
        <select
          value={selectedRoom ? selectedRoom.id : ""}
          onChange={(e) => {
            const room = availableRooms.find((r) => r.id === e.target.value);
            setSelectedRoom(room);
          }}
          required
        >
          <option value="">--Select a Room--</option>
          {availableRooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name} - ${room.pricePerNight}/night
            </option>
          ))}
        </select>
      </label>

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
          max={selectedRoom?.maxGuests}
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          required
        />
      </label>

      {selectedRoom && (
        <div className="room-info">
          <h3>Room Details</h3>
          <p>Name: {selectedRoom.name}</p>
          <p>Price per Night: R{selectedRoom.pricePerNight}</p>
          <p>Max Guests: {selectedRoom.maxGuests}</p>
          <p>Description: {selectedRoom.description}</p>
        </div>
      )}
      <p>Total Days: {totalDays}</p>
      <p>Total Price: R{totalPrice.toFixed(2)}</p>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
