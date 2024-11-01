import '/src/assets/styles/roomCard.css'; // Import the CSS file
import { FaHotel } from "react-icons/fa6";
import { MdLocalHotel } from "react-icons/md";
import { MdReduceCapacity } from "react-icons/md";
import { IoMdResize } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdBathroom } from "react-icons/md";
import { MdRoomService } from "react-icons/md";

const RoomCard = ({ room }) => {
  const {
    name = "Unnamed Room",
    roomType = "N/A",
    bedType = "N/A",
    capacity = "N/A",
    size = "N/A",
    pricePerNight = "N/A",
    maxGuests = "N/A",
    amenities = {},
    photos = [],
    isAvailable = false,
  } = room || {};

  return (
    <div className="room-card">
      <div className="room-photo-wrapper">
        {photos.length > 0 ? (
          <img
            src={photos[0]} 
            alt="Room"
            className="room-photo"
          />
        ) : (
          <span>No Photos Available</span>
        )}
      </div>
      <div className="room-details">
        <h3 className="room-name">{name}</h3>
        <div className="room-info">
          <p><strong><FaHotel /> Room Type:</strong> {roomType}</p>
          <p><strong><MdLocalHotel /> Bed Type:</strong> {bedType}</p>
          <p><strong><MdReduceCapacity /> Capacity:</strong> {capacity} guests</p>
          <p><strong><IoMdResize /> Size:</strong> {size} sq ft</p>
          <p><strong><IoIosPricetags /> Price per night:</strong> R{pricePerNight}</p>
          <p><strong><FaArrowsDownToPeople /> Max Guests:</strong> {maxGuests}</p>
          <p>
            <strong> <MdRoomService /> Amenities:</strong> In-room (
            {amenities.inRoom?.length ? amenities.inRoom.join(", ") : "N/A"}
            ), <MdBathroom /> Bathroom (
            {amenities.bathroom?.length ? amenities.bathroom.join(", ") : "N/A"}
            ), Other (
            {amenities.otherFeatures?.length ? amenities.otherFeatures.join(", ") : "N/A"}
            )
          </p>
          <p>
            {isAvailable ? (
              <span style={{ color: 'green' }}>Room is Available</span>
            ) : (
              <span style={{ color: 'red' }}>Room is Not Available</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
