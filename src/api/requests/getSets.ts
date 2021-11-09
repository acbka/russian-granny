import { child, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbRef } from "api/firebase/firebase";

import { selectDishes } from "api/selectors";
import { DishType, SetType } from "common/types";
import { useSelector } from "react-redux";
// import { setsData } from "./setData";

type setsDataType = {
  name: string;
  dishes: number[];
  selected: boolean;
};

// const setsData = (dishes: DishType[], sets: setsDataType[]) => {
//   let tempSets: SetType[] = [];
//   for (let i = 0; i < sets.length; i++) {
//     const setsDishes = sets[i].dishes.map((item) =>
//       dishes.find((dish) => dish.id === item)
//     );
//     let tempSet = { ...sets[i], dishes: setsDishes };
//     tempSets.push(tempSet as SetType);
//   }
//   console.log("tempSets", tempSets);
//   return tempSets;
// };

export const getSets = createAsyncThunk("sets/sets", async () => {
  const dishes = useSelector(selectDishes);
  const response = await get(child(dbRef, "sets"));
  const sets = response.val();
  let tempSets: SetType[] = [];
  for (let i = 0; i < sets.length; i++) {
    const setsDishes = sets[i].dishes.map((item: number) =>
      dishes.find((dish) => dish.id === item)
    );
    let tempSet = { ...sets[i], dishes: setsDishes };
    tempSets.push(tempSet as SetType);
  }
  console.log("tempSets", tempSets);
  return tempSets;
  //   return setsData(dishes, response.val());
});
