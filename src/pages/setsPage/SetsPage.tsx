import React, { useState, useEffect } from "react";
import { selectDishes } from "api/selectors";
import { useSelector } from "react-redux";
import { dishInterface } from "common/dishInterface";
import Set from "./Set";
import Layout from "components/Layout";

const SetsPage = () => {
  const dishes = useSelector(selectDishes);
  const [sets, setSets] = useState<dishInterface[][]>([]);

  useEffect(() => {
    let tempSets: dishInterface[][] = [];
    for (let i = 1; i <= 4; i++) {
      let set = dishes.filter((dish) => dish.sets.includes(i));
      tempSets = [...sets, set];
    }
    setSets(tempSets);
  }, []);

  const setsList = sets.map((item, index) => <Set key={index} set={item} />);

  return <Layout title="Dishes' Sets ">{setsList}</Layout>;
};

export default SetsPage;
