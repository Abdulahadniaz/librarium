import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CartState {
  cart: Book[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // TODO: rename actions more meaningfully
  reducers: {
    add: (state, action: PayloadAction<Book>) => {
      const found = state.cart.filter((book) => book.id === action.payload.id);
      if (found.length === 0) {
        state.cart.push(action.payload);
        window.alert("Nice! Item added to Cart");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
      window.alert("Item removed from the cart");
    },
    clear: (state) => {
      state.cart = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
