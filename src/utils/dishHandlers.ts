import { DishType, SetType } from "common/types";
import { AppDispatch } from "api/store";
import { updateDishes } from "api/slises/dishesSlice";
import { updateSets } from "api/slises/setsSlice";
import { categories } from "common/constants";

export const addDish = (
  dish: DishType,
  dishes: DishType[],
  dispatch: AppDispatch
) => {
  if (
    dishes.filter((item) => item.selected && item.category === dish.category)
      .length < categories[dish.category].count
  ) {
    const tempDish = { ...dish, selected: true };
    dispatch(updateDishes(tempDish));
  }
};

export const removeDish = (
  dish: DishType,
  sets: SetType[],
  dispatch: AppDispatch
) => {
  const tempDish = { ...dish, selected: false };
  dispatch(updateDishes(tempDish));

  sets.forEach((set) => {
    if (set.selected && set.dishesId.includes(dish.id)) {
      dispatch(updateSets({ ...set, selected: false }));
    }
  });
};
