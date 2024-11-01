import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (_, { rejectWithValue }) => {
    try {
      const roomsCollection = collection(db, "rooms");
      const roomsSnap = await getDocs(roomsCollection);
      const rooms = roomsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return rooms;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createRoom = createAsyncThunk(
  "rooms/createRoom",
  async (newRoomData, { rejectWithValue }) => {
    try {
      const roomsCollection = collection(db, "rooms");
      const roomDoc = await addDoc(roomsCollection, newRoomData);
      return { id: roomDoc.id, ...newRoomData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const roomDoc = doc(db, "rooms", id);
      await updateDoc(roomDoc, updatedData);
      return { id, ...updatedData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/deleteRoom",
  async (id, { rejectWithValue }) => {
    try {
      const roomDoc = doc(db, "rooms", id);
      await deleteDoc(roomDoc);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    availableRooms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.availableRooms = action.payload;
        state.loading = false;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createRoom.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.availableRooms.push(action.payload);
        state.loading = false;
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateRoom.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        const index = state.availableRooms.findIndex(
          (room) => room.id === action.payload.id
        );
        if (index !== -1) {
          state.availableRooms[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteRoom.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.availableRooms = state.availableRooms.filter(
          (room) => room.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default roomSlice.reducer;
