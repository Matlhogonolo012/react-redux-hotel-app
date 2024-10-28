import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

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
      });
  },
});

export default roomSlice.reducer;
