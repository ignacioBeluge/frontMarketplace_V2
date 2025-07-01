import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postAuth = createAsyncThunk(
  "auth/authenticate",
  async ({ email, password }) => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      {
        email,
        password,
      }
    );
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.role = action.payload.role;
      })
      .addCase(postAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
