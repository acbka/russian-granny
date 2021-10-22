import { createSlice } from "@reduxjs/toolkit";
import { orderType } from "common/types";

type initialStateType = {
  order: orderType;
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
