import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: {},
};

// State actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        username: action.payload.username,
        userId: action.payload.userId,
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
