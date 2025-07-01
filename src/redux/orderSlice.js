import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    const res = await axios.get("http://localhost:8080/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAllOrders",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    const res = await axios.get("http://localhost:8080/orders/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const res = await axios.post(
        "http://localhost:8080/orders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      const mensaje = error.response.data;
      return thunkAPI.rejectWithValue(mensaje);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async ({orderId}, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const res = await axios.delete(
        `http://localhost:8080/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return { orderId };
    } catch (error) {
      const mensaje = error.response.data;
      return thunkAPI.rejectWithValue(mensaje);
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      //
      .addCase(deleteOrder.fulfilled, (state, action) => {
        const id = action.payload.orderId;
        state.items = state.items.filter(order => order.orderId !== id);
      })
  },
});

export default ordersSlice.reducer;
