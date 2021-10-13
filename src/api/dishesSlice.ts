import { createSlice } from "@reduxjs/toolkit";
import { dishType } from "common/types";

type initialStateType = {
  dish: dishType | null;
  dishes: dishType[];
  dishesInOrder: dishType[];
};

const initialState: initialStateType = {
  dish: null,
  dishes: [],
  dishesInOrder: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setDishes: (state, { payload }) => {
      state.dishes = payload;
    },
    addDishToOrder: (state, { payload }) => {
      state.dishesInOrder.push(payload as dishType);
    },
    removeDishFromOrder: (state, { payload }) => {
      const index = state.dishesInOrder.findIndex(
        (item) => item.id === payload.id
      );
      state.dishesInOrder.splice(index, 1);
    },
    getDishById: (state, { payload }) => {
      const dish = state.dishes.find((item) => item.id === payload);
      state.dish = dish as dishType;
    },
  },
});

export const { setDishes, addDishToOrder, removeDishFromOrder, getDishById } =
  dishesSlice.actions;

export default dishesSlice.reducer;
