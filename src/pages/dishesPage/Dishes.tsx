import React from "react";
import { selectDishes } from "api/selectors";
import { useAppDispatch } from "api/store";
import { updateDishes } from "api/slises/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Dish from "./Dish";
import { dishType } from "common/types";
import { categories } from "common/constants";
import Layout from "components/Layout";
import SideCart from "components/SideCart";

type Params = {
  category: string;
};
const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector(selectDishes);
  const { category } = useParams<Params>();
  const list = dishes
    .filter((item) => item.category.toLowerCase() === category)
    .map((item, index) => (
      <Dish
        key={index}
        dish={item}
        addDish={() => addDish(item)}
        removeDish={() => removeDish(item)}
      />
    ));

  const addDish = (dish: dishType) => {
    if (
      dishes.filter((item) => item.selected && item.category === dish.category)
        .length < categories[dish.category].count
    ) {
      const tempDish = { ...dish, selected: true };
      dispatch(updateDishes(tempDish));
    }
  };

  const removeDish = (dish: dishType) => {
    const tempDish = { ...dish, selected: false };
    dispatch(updateDishes(tempDish));
  };

  return (
    <Layout title={category.charAt(0).toUpperCase() + category.slice(1)}>
        {list}
        <SideCart />
    </Layout>
  );
};

export default Dishes;
