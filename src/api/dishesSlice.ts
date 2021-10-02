import { createSlice } from "@reduxjs/toolkit";
import { dishInterface } from "common/dishInterface";
import { categories } from "common/constants";

type initialStateType = {
  dishes: dishInterface[];
  dishesInOrder: dishInterface[];
};

const initialState: initialStateType = {
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
      state.dishesInOrder.push(payload as dishInterface);
    },
    removeDishFromOrder: (state, { payload }) => {
      const index = state.dishesInOrder.findIndex(item=>item.id === payload.id);
      state.dishesInOrder.splice(index, 1);
    },
  },
});

export const { setDishes, addDishToOrder, removeDishFromOrder } =
  dishesSlice.actions;

export default dishesSlice.reducer;
