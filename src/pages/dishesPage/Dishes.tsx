import React from "react";
import { selectDishes, selectDishesInOrder } from "api/selectors";
import { useAppDispatch } from "api/store";
import { addDishToOrder, removeDishFromOrder } from "api/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Dish from "./Dish";
import { dishInterface } from "common/dishInterface";
import { categories } from "common/constants";
import Layout from "components/Layout";

type Params = {
  category: string;
};
const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector(selectDishes);
  const dishesInOrder = useSelector(selectDishesInOrder);
  const { category } = useParams<Params>();
  const list = dishes
    .filter((item) => item.category.toLowerCase() === category)
    .map((item, index) => (
      <Dish
        key={index}
        dish={item}
        addDish={() => selectDish(item)}
        removeDish={() => removeDish(item)}
      />
    ));

  const selectDish = (value: dishInterface) => {
    if (
      dishesInOrder.filter((item) => item.category === value.category).length <
      categories[value.category].count
    )
      dispatch(addDishToOrder(value));
  };

  const removeDish = (value: dishInterface) => {
    dispatch(removeDishFromOrder(value));
  };

  return (
    <Layout title={category.charAt(0).toUpperCase() + category.slice(1)}>
      {list}
    </Layout>
  );
};

export default Dishes;
