import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (_, thunkAPI) =>  {
    const token = thunkAPI.getState().auth.token;

    const res = await axios.get("http://localhost:8080/orders", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data;
});

export const createOrder = createAsyncThunk("orders/createOrder", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    const res = await axios.post("http://localhost:8080/orders", 
        {},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data;
    })

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        items: [],
        loading: false,
        error: null
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
        .addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        })
    }
})

export default ordersSlice.reducer;