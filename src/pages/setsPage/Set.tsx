import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { dishType, setType } from "common/types";
import { selectDishes } from "api/selectors";
import { updateSets } from "api/setsSlice";
import { changeSelectedValue } from "api/dishesSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import Button from "components/Button";

type SetPropsType = {
  set: setType;
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

const Set = ({ set }: SetPropsType) => {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const [dishesSet, setDishesSet] = useState<dishType[][]>([]);

  useEffect(() => {
    const tempDishArray = [];
    for (let category in set.dishes) {
      const dishesId = set.dishes[category];
      const dishesByCategory = dishesId.map((item) =>
        dishes.find((dish) => dish.id === item)
      );
      tempDishArray.push(dishesByCategory);
      setDishesSet(tempDishArray as dishType[][]);
    }
  }, []);

  const dishesList = dishesSet.map((item, index) => (
    <Card key={index} dishes={item} />
  ));

  const addSet = () => {
    dishesSet.flat(1).forEach((dish) => {
      const tempDish = { ...dish, selected: true };
      dispatch(changeSelectedValue(tempDish));
    });
    const tempSet = { ...set, selected: true };
    dispatch(updateSets(tempSet));
  };
  const removeSet = () => {
    dishesSet.flat(1).forEach((dish) => {
      const tempDish = { ...dish, selected: false };
      dispatch(changeSelectedValue(tempDish));
      const tempSet = { ...set, selected: false };
      dispatch(updateSets(tempSet));
    });
  };

  return (
    <Wrapper>
      <h2>{set.name} </h2>
      <DishesList>{dishesList}</DishesList>
      {set.selected ? (
        <Button title="Remove" handleClick={removeSet} />
      ) : (
        <Button title="Add to order" handleClick={addSet} />
      )}
    </Wrapper>
  );
};
export default Set;
