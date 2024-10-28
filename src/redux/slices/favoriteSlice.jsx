import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";

export const addFavoriteRoom = createAsyncThunk(
  "favorites/addFavorite",
  async (roomData, { getState, rejectWithValue }) => {
    try {
      const userId = getState().auth.user.uid;
      const favoriteRef = await db
        .collection("favorites")
        .add({ ...roomData, userId });
      return { id: favoriteRef.id, ...roomData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (_, { getState, rejectWithValue }) => {
    try {
      const userId = getState().auth.user.uid;
      const favoritesSnap = await db
        .collection("favorites")
        .where("userId", "==", userId)
        .get();
      const favorites = favoritesSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return favorites;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteRooms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteRoom.fulfilled, (state, action) => {
        state.favoriteRooms.push(action.payload);
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteRooms = action.payload;
      });
  },
});

export default favoriteSlice.reducer;
