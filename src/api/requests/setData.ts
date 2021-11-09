import { child, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbRef } from "api/firebase/firebase";

import { selectDishes } from "api/selectors";
import { DishType, SetType } from "common/types";
import { useSelector } from "react-redux";

type setsDataType = {
  name: string;
  dishes: number[];
  selected: boolean;
};

export const setsData = (dishes: DishType[], sets: setsDataType[]) => {
  let tempSets: SetType[] = [];
  for (let i = 0; i < sets.length; i++) {
    const setsDishes = sets[i].dishes.map((item) =>
      dishes.find((dish) => dish.id === item)
    );
    let tempSet = { ...sets[i], dishes: setsDishes };
    tempSets.push(tempSet as SetType);
  }
  console.log("tempSets", tempSets);
  return tempSets;
};