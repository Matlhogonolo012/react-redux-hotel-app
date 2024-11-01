import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const addFavoriteRoom = createAsyncThunk(
  "favorites/addFavorite",
  async (roomData, { getState, rejectWithValue }) => {
    try {
      const userId = getState().auth.user.uid;
      const docRef = await addDoc(collection(db, "favorites"), {
        ...roomData,
        userId,
      });
      return { id: docRef.id, ...roomData };
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
      const favoritesQuery = query(
        collection(db, "favorites"),
        where("userId", "==", userId)
      );
      const favoritesSnap = await getDocs(favoritesQuery);
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

export const removeFavoriteRoom = createAsyncThunk(
  "favorites/removeFavorite",
  async (roomId, { rejectWithValue }) => {
    try {
      const favoriteRef = doc(db, "favorites", roomId);
      await deleteDoc(favoriteRef);
      return roomId;
    } catch (error) {
      console.error("Error removing favorite room:", error);
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
        console.log("Adding favorite room:", action.payload);
        state.favoriteRooms.push(action.payload);
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        console.log("Fetched favorite rooms:", action.payload);
        state.favoriteRooms = action.payload;
      })
      .addCase(removeFavoriteRoom.fulfilled, (state, action) => {
        console.log("Removing favorite room ID:", action.payload);
        state.favoriteRooms = state.favoriteRooms.filter(
          (room) => room.id !== action.payload
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default favoriteSlice.reducer;
