import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Estado inicial
const initialState = {
  items: [],
  totalPrice: 0,
  status: "idle",
  error: null,
};

// Thunk: obtener carrito
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    const res = await axios.get("http://localhost:8080/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      await axios.post(
        "http://localhost:8080/cart",
        { productId, quantity: 1 },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      thunkAPI.dispatch(fetchCart());
      return response.data
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Thunk: actualizar cantidad
export const updateCantidad = createAsyncThunk(
  "cart/updateCantidad",
  async ({ productId, quantity }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    await axios.put(
      "http://localhost:8080/cart/update",
      { productId, quantity },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return thunkAPI.dispatch(fetchCart());
  }
);

// Thunk: eliminar ítem
export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    await axios.delete(`http://localhost:8080/cart/remove/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Volvemos a cargar el carrito actualizado
    thunkAPI.dispatch(fetchCart());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items.map((item) => ({
          ...item.product,
          quantity: item.quantity,
        }));
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
