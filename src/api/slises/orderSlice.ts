import { createSlice } from "@reduxjs/toolkit";
import { orderType} from "common/types";

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
  },
});

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
