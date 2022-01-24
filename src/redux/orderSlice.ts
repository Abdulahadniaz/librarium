import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
      window.alert("Order Placed!");
    },
  },
});

export const { placeOrder } = orderSlice.actions;

export const selectOrders = (state: RootState) => state.order.orders;

export default orderSlice.reducer;
