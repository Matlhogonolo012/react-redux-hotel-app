import '/src/assets/styles/roomCard.css'; // Import the CSS file

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
          <p><strong>Room Type:</strong> {roomType}</p>
          <p><strong>Bed Type:</strong> {bedType}</p>
          <p><strong>Capacity:</strong> {capacity} guests</p>
          <p><strong>Size:</strong> {size} sq ft</p>
          <p><strong>Price per night:</strong> R{pricePerNight}</p>
          <p><strong>Max Guests:</strong> {maxGuests}</p>
          <p>
            <strong>Amenities:</strong> In-room (
            {amenities.inRoom?.length ? amenities.inRoom.join(", ") : "N/A"}
            ), Bathroom (
            {amenities.bathroom?.length ? amenities.bathroom.join(", ") : "N/A"}
            ), Other (
            {amenities.otherFeatures?.length ? amenities.otherFeatures.join(", ") : "N/A"}
            )
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
