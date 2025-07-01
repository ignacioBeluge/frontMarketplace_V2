import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import ordersReducer from './orderSlice'
import categoriesReducer from './categoriesSlice'
import registerReducer from './registerSlice'

//estado global 

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productReducer,
        auth: authReducer,
        cart: cartReducer,
        orders: ordersReducer,
        register: registerReducer,
    }
})