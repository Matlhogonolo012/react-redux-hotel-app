import { useState } from "react";
import { db } from "/src/config/firebase.jsx";
import { collection, addDoc } from "firebase/firestore";

const AddRoomForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomData = {
      name,
      description,
      pricePerNight: Number(pricePerNight),
      maxGuests: Number(maxGuests),
    };

    try {
      const roomsCollection = collection(db, "rooms");
      const docRef = await addDoc(roomsCollection, roomData);
      console.log("Document written with ID: ", docRef.id);

      setName("");
      setDescription("");
      setPricePerNight("");
      setMaxGuests("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Room</h2>
      <label>
        Room Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price per Night:
        <input
          type="number"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
          required
        />
      </label>
      <label>
        Max Guests:
        <input
          type="number"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoomForm;
