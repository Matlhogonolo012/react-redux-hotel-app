import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const fetchRatings = createAsyncThunk(
  "ratings/fetchRatings",
  async (userId) => {
    const q = query(collection(db, "ratings"), where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

export const addRating = createAsyncThunk(
  "ratings/addRating",
  async ({ roomId, rating, userId }) => {
    const docRef = await addDoc(collection(db, "ratings"), {
      roomId,
      rating,
      userId,
    });
    return { id: docRef.id, roomId, rating, userId };
  }
);

const ratingSlice = createSlice({
  name: "ratings",
  initialState: {
    ratings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRatings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRatings.fulfilled, (state, action) => {
        state.ratings = action.payload;
        state.loading = false;
      })
      .addCase(fetchRatings.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.ratings.push(action.payload);
      });
  },
});

export default ratingSlice.reducer;
