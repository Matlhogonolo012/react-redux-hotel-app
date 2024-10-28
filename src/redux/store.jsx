import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import roomReducer from "./slices/roomSlice";
import bookingReducer from "./slices/bookingSlice";
import favoriteReducer from "./slices/favoriteSlice";
import ratingReducer from "./slices/ratingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomReducer,
    bookings: bookingReducer,
    favorites: favoriteReducer,
    ratings: ratingReducer,
  },
});

export default store;
