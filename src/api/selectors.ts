import { DishesStateType } from "./store";

export const selectDishes = (state: DishesStateType) => state.dishes.dishes;
export const selectDishesInOrder = (state: DishesStateType) =>
  state.dishes.dishesInOrder;