import { useState } from "react";

const AddRoomForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedType, setBedType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [size, setSize] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [inRoomAmenities, setInRoomAmenities] = useState("");
  const [bathroomAmenities, setBathroomAmenities] = useState("");
  const [otherFeatures, setOtherFeatures] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [roomService, setRoomService] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [specialOffers, setSpecialOffers] = useState("");
  const [photos, setPhotos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      roomType,
      bedType,
      capacity: parseInt(capacity, 10),
      size,
      pricePerNight: parseFloat(pricePerNight),
      maxGuests: parseInt(maxGuests, 10),
      amenities: {
        inRoom: inRoomAmenities.split(",").map(item => item.trim()),
        bathroom: bathroomAmenities.split(",").map(item => item.trim()),
        otherFeatures: otherFeatures.split(",").map(item => item.trim()),
      },
      policies: {
        checkIn,
        checkOut,
        cancellationPolicy,
        smoking: smokingAllowed,
      },
      additionalInfo: {
        roomService,
        accessibility,
        specialOffers,
      },
      photos: photos.split(",").map(item => item.trim()),
    });
    // Reset form fields
    setName("");
    setRoomType("");
    setBedType("");
    setCapacity("");
    setSize("");
    setPricePerNight("");
    setMaxGuests("");
    setInRoomAmenities("");
    setBathroomAmenities("");
    setOtherFeatures("");
    setCheckIn("");
    setCheckOut("");
    setCancellationPolicy("");
    setSmokingAllowed(false);
    setRoomService("");
    setAccessibility("");
    setSpecialOffers("");
    setPhotos("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Room Name" required />
      <input type="text" value={roomType} onChange={(e) => setRoomType(e.target.value)} placeholder="Room Type" required />
      <input type="text" value={bedType} onChange={(e) => setBedType(e.target.value)} placeholder="Bed Type" required />
      <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Capacity" required />
      <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size (sq ft)" required />
      <input type="number" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} placeholder="Price Per Night" required />
      <input type="number" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} placeholder="Max Guests" required />
      <input type="text" value={inRoomAmenities} onChange={(e) => setInRoomAmenities(e.target.value)} placeholder="In-room Amenities (comma-separated)" />
      <input type="text" value={bathroomAmenities} onChange={(e) => setBathroomAmenities(e.target.value)} placeholder="Bathroom Amenities (comma-separated)" />
      <input type="text" value={otherFeatures} onChange={(e) => setOtherFeatures(e.target.value)} placeholder="Other Features (comma-separated)" />
      <input type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} placeholder="Check-in Policy" />
      <input type="text" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} placeholder="Check-out Policy" />
      <input type="text" value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} placeholder="Cancellation Policy" />
      <label>
        Smoking Allowed:
        <input type="checkbox" checked={smokingAllowed} onChange={(e) => setSmokingAllowed(e.target.checked)} />
      </label>
      <input type="text" value={roomService} onChange={(e) => setRoomService(e.target.value)} placeholder="Room Service Info" />
      <input type="text" value={accessibility} onChange={(e) => setAccessibility(e.target.value)} placeholder="Accessibility Info" />
      <input type="text" value={specialOffers} onChange={(e) => setSpecialOffers(e.target.value)} placeholder="Special Offers" />
      <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} placeholder="Photos (comma-separated URLs)" />
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoomForm;
