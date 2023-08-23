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
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreamentQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});
export const selectCartItemsCount = state => state.cart.items.length;
export const selectCartItems = state => state.cart.items;
export const totalprice = state => {
  return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const { addItemToCart,incrementQuantity,decreamentQuantity,removeItemFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;