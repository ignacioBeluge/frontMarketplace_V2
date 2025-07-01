import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async(categoryId) => {
    //peticion a la app
    const URL = `http://localhost:8080/products/${categoryId}`
    const {data} = await axios.get(URL);
    return data;

}) //llamadas a la api

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async() => {
    //peticion a la app
    const URL = "http://localhost:8080/products"
    const {data} = await axios.get(URL);
    return data;

}) 

export const createProducts = createAsyncThunk("products/createProducts", async ( newProduct, thunkAPI ) => {
    try {
    const token = thunkAPI.getState().auth.token;

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", parseFloat(newProduct.price));
    formData.append("stock", parseInt(newProduct.stock));
    formData.append("image", newProduct.imageFile);
    formData.append("categoryId", newProduct.selectedCategoryId);

    const response = await axios.post(
      "http://localhost:8080/products",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
})

export const updateStock = createAsyncThunk("products/updateStock", async(updatedStock, thunkAPI) => {
  const {id, stock} = updatedStock
  const token = thunkAPI.getState().auth.token;
  const {data} = await axios.put(`http://localhost:8080/products/${id}/stock`, 
    {stock},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
  return data
})

export const updatePrice = createAsyncThunk("products/updatePrice", async(updatedPrice, thunkAPI) => {
  const {id, price} = updatedPrice
  const token = thunkAPI.getState().auth.token;
  const {data} = await axios.put(`http://localhost:8080/products/${id}/price`, 
    {price},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
  return data
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async ({id}, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const {data} = await axios.delete(`http://localhost:8080/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  )
  return {id}; 
})

const productSlice = createSlice({
    name: "products", // debe coincidir con asyncThunk
    initialState: {
        items: [], // estado global, guardo todos los productos
        loading: false,
        error: null
    },
    reducers: {}, //tienen funciones que permiten actualizar de forma sincrona
    extraReducers: (builder) => {
        builder // gestiona estados de la promesa
        // manejar GET
        .addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload // de los datos que obtuvo en la api los almacena en items
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
        .addCase(fetchAllProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
        // POST
        .addCase(createProducts.fulfilled, (state,action) => {
            state.items = [...state.items, action.payload] //creo un nuevo arreglo que tenga todos los productos y agregue el newproduct al final
        })
        // PUT
        .addCase(updateStock.fulfilled, (state, action) => {
          const index = state.items.findIndex(product => product.id === action.payload.id)
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        })
        .addCase(updatePrice.fulfilled, (state, action) => {
          const index = state.items.findIndex(product => product.id === action.payload.id)
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        })
        // DELETE
        .addCase(deleteProduct.fulfilled, (state, action) => {
          const index = state.items.findIndex(product => product.id === action.payload.id)
          if (index !== -1) {
            state.items.splice(index, 1);
          }
        })
    } //como reacciona la slice a las acciones async creadas fuera del reducer
});

export default productSlice.reducer;