import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "/src/config/firebase.jsx";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "/src/config/firebase.jsx";

const fetchUserRole = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  return userDoc.exists() ? userDoc.data().role : null;
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const role = await fetchUserRole(userCredential.user.uid);

      if (!role) {
        throw new Error("User role not found");
      }

      const userData = { ...userCredential.user, role };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isAuthenticated", true);

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        role: role || "user",
      });

      const userData = { ...userCredential.user, role };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isAuthenticated", true);

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);

      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadUserFromLocalStorage = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (user && isAuthenticated) {
    dispatch(loginUser.fulfilled(user));
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
