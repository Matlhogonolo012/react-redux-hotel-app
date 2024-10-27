import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (_, { rejectWithValue }) => {
  try {
    const roomsSnap = await firestore.collection('rooms').get();
    const rooms = roomsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return rooms;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const roomSlice = createSlice({
  name: 'rooms',
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
