import { configureStore } from "@reduxjs/toolkit";
import { dishInterface } from "common/dishInterface";
import dishesSlice from "./dishesSlice";
import { useDispatch } from "react-redux";

export type DishesStateType = {
  dishes: {
    dishes: dishInterface[];
  };
};

const store = configureStore({
  reducer: {
    dishes: dishesSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
