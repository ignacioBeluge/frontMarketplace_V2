import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL ="http://localhost:8080/categories"

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async()=>{
    const {data} = await axios.get(URL)
    return data
})

export const createCategories =createAsyncThunk('categories/createCategories', async({description,thunkAPI})=>{
    const token = thunkAPI.getState().auth.token;
    
    const response = await axios.post(URL, {description},{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  }
);

const categoriesSlice= createSlice({
    name: "categories",
    initialState: {
        items: [], // guardo todas las categorias
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        // manejar GET
        .addCase(fetchCategories.pending,(state)=>{
            state.loading=true;
            state.error= null
        })
        .addCase(fetchCategories.fulfilled,(state, action)=>{
            state.loading=false;
            state.items= action.payload
        })
        .addCase(fetchCategories.rejected, (state, action)=>{
            state.loading= false;
            state.error= action.error.message
        })
        // manejar POST
        .addCase(createCategories.fulfilled, (state,action)=>{
            state.items = [...state.items, action.payload]
        })
    },
});

export default categoriesSlice.reducer;

