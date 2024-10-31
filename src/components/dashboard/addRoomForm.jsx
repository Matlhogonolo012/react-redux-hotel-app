import { useState, useEffect } from "react";

const AddRoomForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedType, setBedType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [size, setSize] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [inRoomAmenities, setInRoomAmenities] = useState("");
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [photos, setPhotos] = useState([""]);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setRoomType(initialData.roomType || "");
      setBedType(initialData.bedType || "");
      setCapacity(initialData.capacity || "");
      setSize(initialData.size || "");
      setPricePerNight(initialData.pricePerNight || "");
      setMaxGuests(initialData.maxGuests || "");
      setInRoomAmenities(initialData.amenities?.inRoom.join(", ") || "");
      setSmokingAllowed(initialData.smokingAllowed || false);
      setPhotos(initialData.photos || [""]);
    } else {
      resetForm();
    }
  }, [initialData]);

  const handlePhotoChange = (index, value) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index] = value;
    setPhotos(updatedPhotos);
  };

  const addPhotoField = () => setPhotos([...photos, ""]);
  const removePhotoField = (index) =>
    setPhotos(photos.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();

    const roomData = {
      name,
      roomType,
      bedType,
      capacity: parseInt(capacity, 10) || 0,
      size,
      pricePerNight: parseFloat(pricePerNight) || 0.0,
      maxGuests: parseInt(maxGuests, 10) || 0,
      amenities: {
        inRoom: inRoomAmenities.split(",").map((item) => item.trim()),
      },
      smokingAllowed,
      photos: photos.filter((url) => url !== ""),
    };

    console.log("Submitting Room Data:", roomData);

    onSubmit(roomData);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setRoomType("");
    setBedType("");
    setCapacity("");
    setSize("");
    setPricePerNight("");
    setMaxGuests("");
    setInRoomAmenities("");
    setSmokingAllowed(false);
    setPhotos([""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Room Name"
        required
      />
      <input
        type="text"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        placeholder="Room Type"
        required
      />
      <input
        type="text"
        value={bedType}
        onChange={(e) => setBedType(e.target.value)}
        placeholder="Bed Type"
        required
      />
      <input
        type="number"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        placeholder="Capacity"
        required
      />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Size (sq ft)"
        required
      />
      <input
        type="number"
        value={pricePerNight}
        onChange={(e) => setPricePerNight(e.target.value)}
        placeholder="Price Per Night"
        required
      />
      <input
        type="number"
        value={maxGuests}
        onChange={(e) => setMaxGuests(e.target.value)}
        placeholder="Max Guests"
        required
      />
      <input
        type="text"
        value={inRoomAmenities}
        onChange={(e) => setInRoomAmenities(e.target.value)}
        placeholder="In-room Amenities (comma separated)"
        required
      />
      <label>
        Smoking Allowed:
        <input
          type="checkbox"
          checked={smokingAllowed}
          onChange={(e) => setSmokingAllowed(e.target.checked)}
        />
      </label>

      <h3>Photos:</h3>
      {photos.map((url, index) => (
        <div key={index}>
          <input
            type="url"
            value={url}
            onChange={(e) => handlePhotoChange(index, e.target.value)}
            placeholder={`Photo URL ${index + 1}`}
          />
          <button type="button" onClick={() => removePhotoField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addPhotoField}>
        Add Another Photo
      </button>

      <button type="submit">{initialData ? "Update Room" : "Add Room"}</button>
    </form>
  );
};

export default AddRoomForm;
