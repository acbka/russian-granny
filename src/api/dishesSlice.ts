import { createSlice } from "@reduxjs/toolkit";
import { DishesStateType } from "./store";

const initialState = {
  dishes: [],
};

const dishesSlice = createSlice({
  name: "horse",
  initialState,
  reducers: {
    setDishes: (state, { payload }) => {
      state.dishes = payload;
      console.log("dd", state.dishes);
    },
  },
});

export const { setDishes } = dishesSlice.actions;
export const selectDishes = (state: DishesStateType) => state.dishes.dishes;
export default dishesSlice.reducer;
