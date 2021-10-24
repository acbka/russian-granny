import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "common/types";

type initialStateType = {
  dish: Dish | null;
  dishes: Dish[];
};

const initialState: initialStateType = {
  dish: null,
  dishes: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setDishes: (state, { payload }) => {
      state.dishes = payload;
    },
    updateDishes: (state, { payload }) => {
      const index = state.dishes.findIndex((dish) => dish.id === payload.id);
      state.dishes.splice(index, 1, payload);
    },
    getDishById: (state, { payload }) => {
      const dish = state.dishes.find((item) => item.id === payload);
      state.dish = dish as Dish;
    },
  },
});

export const { setDishes, updateDishes, getDishById } = dishesSlice.actions;

export default dishesSlice.reducer;
