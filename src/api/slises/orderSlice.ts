import { createSlice } from "@reduxjs/toolkit";
import { dishType, orderType } from "common/types";

type initialStateType = {
  order: orderType;
};

const initialState: initialStateType = {
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      state.order = payload;
    },
     setDishesInOrder: (state, { payload }) => {
      state.order.dishes = payload;
    },
  },
});

export const { setOrder, setDishesInOrder } = orderSlice.actions;

export default orderSlice.reducer;
