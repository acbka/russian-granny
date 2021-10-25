import { createSlice } from "@reduxjs/toolkit";
import { DishType } from "common/types";

type initialStateType = {
  dish: DishType | null;
  dishes: DishType[];
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
      state.dish = dish as DishType;
    },
  },
});

export const { setDishes, updateDishes, getDishById } = dishesSlice.actions;
export default dishesSlice.reducer;
