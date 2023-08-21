import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartSlice.js"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // Other reducers
      },
})