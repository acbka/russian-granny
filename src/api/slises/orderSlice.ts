import { createSlice } from "@reduxjs/toolkit";
import { Order } from "common/types";

type initialStateType = {
  order: Order;
};

const initialState: initialStateType = {
  order: {
    dishes: [],
    user: {},
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setUserInOrder: (state, { payload }) => {
      state.order.user = payload;
    },
    setDishesInOrder: (state, { payload }) => {
      state.order.dishes = payload;
    },
  },
});

export const { setUserInOrder, setDishesInOrder } = orderSlice.actions;
export default orderSlice.reducer;
