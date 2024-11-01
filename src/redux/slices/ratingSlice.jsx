import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "/src/config/firebase.jsx";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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
  async ({ roomId, rating, comment, userId }, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "ratings"), {
        roomId,
        rating,
        comment,
        userId,
        createdAt: new Date(),
      });
      return { id: docRef.id, roomId, rating, comment, userId };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to submit rating");
    }
  }
);

export const editRating = createAsyncThunk(
  "ratings/editRating",
  async ({ ratingId, newRating, newComment }, { rejectWithValue }) => {
    try {
      const ratingRef = doc(db, "ratings", ratingId);
      await updateDoc(ratingRef, {
        rating: newRating,
        comment: newComment,
        updatedAt: new Date(),
      });
      return { id: ratingId, rating: newRating, comment: newComment };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to edit rating");
    }
  }
);

export const deleteRating = createAsyncThunk(
  "ratings/deleteRating",
  async (ratingId, { rejectWithValue }) => {
    try {
      const ratingRef = doc(db, "ratings", ratingId);
      await deleteDoc(ratingRef);
      return ratingId;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete rating");
    }
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
      })
      .addCase(addRating.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editRating.fulfilled, (state, action) => {
        const index = state.ratings.findIndex(
          (rating) => rating.id === action.payload.id
        );
        if (index !== -1) {
          state.ratings[index] = action.payload;
        }
      })
      .addCase(editRating.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteRating.fulfilled, (state, action) => {
        state.ratings = state.ratings.filter(
          (rating) => rating.id !== action.payload
        );
      })
      .addCase(deleteRating.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default ratingSlice.reducer;
