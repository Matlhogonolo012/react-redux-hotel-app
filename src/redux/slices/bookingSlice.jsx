import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';

export const addBooking = createAsyncThunk('bookings/addBooking', async (bookingData, { getState, rejectWithValue }) => {
  try {
    const userId = getState().auth.user.uid;
    const bookingRef = await firestore.collection('bookings').add({ ...bookingData, userId, createdAt: new Date() });
    return { id: bookingRef.id, ...bookingData };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async (_, { getState, rejectWithValue }) => {
  try {
    const userId = getState().auth.user.uid;
    const bookingSnap = await firestore.collection('bookings').where('userId', '==', userId).get();
    const bookings = bookingSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return bookings;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookingSlice = createSlice({
  name: 'bookings',
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
