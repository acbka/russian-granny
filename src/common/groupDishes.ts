import { DishType } from "common/types";
import { categories, emptyDish } from "common/constants";

export const groupDishes = (dishes: DishType[]) => {
  let dishesArray: DishType[][] = [];
  for (let category in categories) {
    let count = dishes.filter((dish) => dish.category === category).length;
    let dishesByCategory: DishType[] = [];

    if (categories[category].count === 2) {
      switch (count) {
        case 0:
          dishesByCategory = [
            { ...emptyDish, category: category },
            { ...emptyDish, category: category },
          ];
          break;
        case 1:
          dishesByCategory = [
            dishes.filter((dish) => dish.category === category)[0],
            { ...emptyDish, category: category },
          ];
          break;
        case 2:
          dishesByCategory = [
            dishes.filter((dish) => dish.category === category)[0],
            dishes.filter((dish) => dish.category === category)[1],
          ];
      }
    } else {
      switch (count) {
        case 0:
          dishesByCategory = [{ ...emptyDish, category: category }];
          break;
        case 1:
          dishesByCategory = [
            dishes.filter((dish) => dish.category === category)[0],
          ];
      }
    }
    dishesArray.push(dishesByCategory);
  }
  return dishesArray;
};
