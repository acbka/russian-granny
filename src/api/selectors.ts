import { MainStateType } from "./store";

export const selectDishes = (state: MainStateType) => state.dishes.dishes;
export const selectSets = (state: MainStateType) => state.sets.sets;
export const selectOrder = (state: MainStateType) => state.order.order;
