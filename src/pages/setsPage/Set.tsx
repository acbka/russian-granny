import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { dishType, setType } from "common/types";
import { selectSets } from "api/selectors";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Button from "components/Button";
import { categories } from "common/constants";

type SetPropsType = {
  set: setType;
  addSet: (arg: setType) => void;
  removeSet: (arg: setType) => void;
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 30px 10px;
  margin: 20px 0;
  position: relative;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;
const DishesList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Set = ({ set, addSet, removeSet }: SetPropsType) => {
  const sets = useSelector(selectSets);
  const [dishesSet, setDishesSet] = useState<dishType[][]>([]);
  console.log(set);
  useEffect(() => {
    const tempDishArray = [];
    for (let category in categories) {
      const dishesByCategory = set.dishes.filter(
        (dish) => dish.category === category
      );
      tempDishArray.push(dishesByCategory);
      setDishesSet(tempDishArray as dishType[][]);
    }
  }, []);

  const unselectSet = () => {
    removeSet(set);
  };

  const selectSet = () => {
    addSet(set);
  };

  const dishesList = dishesSet.map((item, index) => (
    <Card key={index} dishes={item} />
  ));

  return (
    <Wrapper>
      <h2>{set.name} </h2>
      <DishesList>{dishesList}</DishesList>
      {set.selected ? (
        <Button title="Remove" handleClick={unselectSet} />
      ) : (
        <Button
          title="Add to order"
          handleClick={selectSet}
          disabled={!set.selected && Boolean(sets.find((set) => set.selected))}
        />
      )}
    </Wrapper>
  );
};
export default Set;
