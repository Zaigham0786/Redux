import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/ItemSlice"
export const store = configureStore({
    reducer: {
      products : productsReducer,
    },
  })