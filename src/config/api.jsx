import { db } from './firebase';

export const fetchAvailableRooms = async () => {
  const rooms = [];
  const snapshot = await db.collection('rooms').where('available', '==', true).get();
  snapshot.forEach((doc) => rooms.push({ id: doc.id, ...doc.data() }));
  return rooms;
};

export const updateRoomAvailability = async (roomId, available) => {
  await db.collection('rooms').doc(roomId).update({ available });
};
g
export const addBooking = async (userId, roomData) => {
  await db.collection('bookings').add({
    userId,
    roomData,
    createdAt: new Date(),
  });
};

export const fetchUserBookings = async (userId) => {
  const bookings = [];
  const snapshot = await db.collection('bookings').where('userId', '==', userId).get();
  snapshot.forEach((doc) => bookings.push({ id: doc.id, ...doc.data() }));
  return bookings;
};
