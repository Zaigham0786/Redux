import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [], // Array to hold the items in the cart
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItemToCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
  
        if (!existingItem) {
          state.items.push({ ...newItem, quantity: 1 });
        } else {
          existingItem.quantity++;
        }
      },
    },
  });
  export const selectCartItemsCount = state => state.cart.items.length;
  export const selectCartItems = state => state.cart.items;
  export const { addItemToCart } = cartSlice.actions;
  export default cartSlice.reducer;