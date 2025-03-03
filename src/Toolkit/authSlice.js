import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { end_points } from "../API/api";
import axiosInstance from "../API/axiosInstance";
import { v4 as uuidv4 } from "uuid";

let api_url = end_points.user;

const initialValue = {
  userToken: localStorage.getItem("bookAddaToken") || null,
  isRegister: false,
  isLoggedIn: !!localStorage.getItem("bookAddaToken"),
  isLoading: false,
  error: false,
  profile: {},
};

// Register user with validation
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ fullName, email, mobile, password }) => {
    // Check if the user already exists
    const res = await axiosInstance.get(
      `${api_url}?email=${email}&mobile=${mobile}`
    );
    if (res.data.length > 0) return null; // User already exists

    // Generate a unique token
    const userToken = uuidv4();

    // Register new user with the generated token
    const response = await axiosInstance.post(api_url, {
      fullName,
      email,
      mobile,
      password,
      token: userToken,
    });

    return response.data;
  }
);

// Login user
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await axiosInstance.get(`${api_url}?email=${email}`);

    if (res.data.length === 0) {
      throw new Error("User not found");
    }

    const user = res.data[0];

    // Check password
    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    // Save token in local storage
    localStorage.setItem("bookAddaToken", user.token);

    return user.token;
  }
);

// Login user
export const userProfile = createAsyncThunk("auth/profile", async () => {
  let token = localStorage.getItem("bookAddaToken");
  const res = await axiosInstance.get(`${api_url}?token=${token}`);

  if (res.data.length === 0) {
    throw new Error("User not found");
  }
  return res.data[0];
});

// Authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    logout: (state) => {
      state.userToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("bookAddaToken");
      window.location.reload("login");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user cases
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? false : "Email or mobile already exists";
        state.isRegister = !!action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong. Please try again.";
      })

      // Login user cases
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userToken = action.payload;
        state.isLoggedIn = true;
        state.error = false;
        localStorage.setItem("bookAddaToken", action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(userProfile.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.profile = action.payload;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Fetching failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
