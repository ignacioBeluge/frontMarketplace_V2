import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        user
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
