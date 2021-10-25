import { configureStore } from "@reduxjs/toolkit";
import { DishType, Order } from "common/types";
import dishesSlice from "./slises/dishesSlice";
import { useDispatch } from "react-redux";
import setsSlice from "./slises/setsSlice";
import { SetType } from "common/types";
import orderSlice from "./slises/orderSlice";

export type MainStateType = {
  dishes: {
    dish: DishType;
    dishes: DishType[];
  };
  sets: {
    sets: SetType[];
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
