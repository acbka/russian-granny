import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "api/requests/getDishes";
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
    updateDishes: (state, { payload }) => {
      const index = state.dishes.findIndex((dish) => dish.id === payload.id);
      state.dishes.splice(index, 1, payload);
    },
    getDishById: (state, { payload }) => {
      const dish = state.dishes.find((item) => item.id === payload);
      state.dish = dish as DishType;
    },
   },
   extraReducers: (builder) => {
      builder.addCase(getDishes.fulfilled, (state, { payload }) => {
         state.dishes = payload;
      });
    },
});

export const {  updateDishes, getDishById } = dishesSlice.actions;
export default dishesSlice.reducer;
