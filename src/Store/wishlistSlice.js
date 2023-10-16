import { createSlice } from "@reduxjs/toolkit";


const WishListLoadingFromStorage = () => {
  try {
    const storedWishList = localStorage.getItem('wishlist');
    return storedWishList ? JSON.parse(storedWishList) : [];
  } catch (error) {
    console.error('Error coming from localStorage:', error);
    return [];
  }
};


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: WishListLoadingFromStorage()
  },
  reducers: {
    addwishlistItem: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    removewishlistItem: (state, action) => {
        state.items = state.items.filter(element => element.id !== action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    clearWishlist: (state, action) => {
      state.items.length = 0;
      localStorage.removeItem('wishlist');
    }
    
  }
});

export const { addwishlistItem, removewishlistItem, clearWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
