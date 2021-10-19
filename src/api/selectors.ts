import { DishesStateType } from "./store";

export const selectDishes = (state: DishesStateType) => state.dishes.dishes;
export const selectSets = (state: DishesStateType) => state.sets.sets;
export const selectOrder = (state: DishesStateType) => state.order.order;
