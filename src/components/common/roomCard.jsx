import React from 'react';

const RoomCard = ({ room }) => (
  <div>
    <h3>{room.name}</h3>
    <p>{room.description}</p>
  </div>
);

export default RoomCard;
