import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import ordersReducer from './orderSlice'

//estado global 

export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        cart: cartReducer,
        orders: ordersReducer,
    }
})