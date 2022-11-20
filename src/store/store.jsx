import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../feature/cart/creatSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        
     }
 })