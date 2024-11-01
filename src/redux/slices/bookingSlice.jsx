import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const addBooking = createAsyncThunk(
  "bookings/addBooking",
  async (bookingData, { getState, rejectWithValue }) => {
    try {
      const userId = getState().auth.user.uid;
      const bookingRef = await addDoc(collection(db, "bookings"), {
        ...bookingData,
        userId,
        createdAt: new Date(),
      });
      return { id: bookingRef.id, ...bookingData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, { getState, rejectWithValue }) => {
    try {
      const userId = getState().auth.user.uid;
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", userId)
      );
      const bookingSnap = await getDocs(q);
      const bookings = bookingSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return bookings;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
        state.loading = false;
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
