import React from "react";
import { selectSets } from "api/selectors";
import { useSelector, useDispatch } from "react-redux";
import { updateDishes } from "api/dishesSlice";
import { updateSets } from "api/setsSlice";
import Layout from "components/Layout";
import { setType } from "common/types";
import Set from "./Set";

const SetsPage = () => {
  const sets = useSelector(selectSets);
  const dispatch = useDispatch();

  const addSet = (set: setType) => {
    set.dishes.forEach((dish) => {
      const tempDish = { ...dish, selected: true };
      dispatch(updateDishes(tempDish));
    });
    const tempSet = { ...set, selected: true };
    dispatch(updateSets(tempSet));
  };

  const removeSet = (set: setType) => {
    set.dishes.forEach((dish) => {
      const tempDish = { ...dish, selected: false };
      dispatch(updateDishes(tempDish));
      const tempSet = { ...set, selected: false };
      dispatch(updateSets(tempSet));
    });
  };

  const setsList = sets.map((item, index) => (
    <Set key={index} set={item} addSet={addSet} removeSet={removeSet} />
  ));

  return <Layout title="Dishes' Sets ">{setsList}</Layout>;
};

export default SetsPage;
