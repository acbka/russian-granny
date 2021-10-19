import { configureStore } from "@reduxjs/toolkit";
import { dishType, orderType, userType } from "common/types";
import dishesSlice from "./slises/dishesSlice";
import { useDispatch } from "react-redux";
import setsSlice from "./slises/setsSlice";
import { setType } from "common/types";

export type DishesStateType = {
  dishes: {
    dish: dishType;
    dishes: dishType[];
  };
  sets: {
    sets: setType[];
  };
   order: {
      order: orderType;
  }
};

const store = configureStore({
  reducer: {
    dishes: dishesSlice,
      sets: setsSlice,
    
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
