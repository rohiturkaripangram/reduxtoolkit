import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: []
  },
  reducers: {
    addwishlistItem: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removewishlistItem: (state, action) => {
        state.items = state.items.filter(element => element.id !== action.payload);
    },
    clearWishlist: (state, action) => {

      state.items = [];
    }
  }
});

export const { addwishlistItem, removewishlistItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
