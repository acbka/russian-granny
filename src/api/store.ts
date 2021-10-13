import { configureStore } from "@reduxjs/toolkit";
import { dishInterface } from "common/dishInterface";
import dishesSlice from "./dishesSlice";
import { useDispatch } from "react-redux";
import setsSlice from "./setsSlice";
import { setType } from "common/setType";

export type DishesStateType = {
  dishes: {
    dish: dishInterface;
    dishes: dishInterface[];
    dishesInOrder: dishInterface[];
  };
  sets: {
    sets: setType[];
  };
};

const store = configureStore({
  reducer: {
    dish: dishesSlice,
    dishes: dishesSlice,
    sets: setsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
