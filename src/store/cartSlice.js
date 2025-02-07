import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Array of { id, name, price, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
