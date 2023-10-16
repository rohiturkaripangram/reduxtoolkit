import { createSlice } from "@reduxjs/toolkit";

const CartLoadingFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error coming from localStorage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: CartLoadingFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        alert("The Item is already present in the cart");
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (element) => element.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      localStorage.removeItem("cart");
    },
    logoutcart: (state) => {
      state.items.length = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, clearCart, logoutcart } = cartSlice.actions;

export default cartSlice.reducer;
