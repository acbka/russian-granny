import { configureStore } from "@reduxjs/toolkit";
import { Dish, Order } from "common/types";
import dishesSlice from "./slises/dishesSlice";
import { useDispatch } from "react-redux";
import setsSlice from "./slises/setsSlice";
import { Set } from "common/types";
import orderSlice from "./slises/orderSlice";

export type MainStateType = {
  dishes: {
    dish: Dish;
    dishes: Dish[];
  };
  sets: {
    sets: Set[];
  };
  order: {
    order: Order;
  };
};

const store = configureStore({
  reducer: {
    dishes: dishesSlice,
    sets: setsSlice,
    order: orderSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
