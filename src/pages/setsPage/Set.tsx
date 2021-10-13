import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { dishInterface } from "common/dishInterface";
import Card from "../../components/Card";
import { setType } from "common/setType";
import { useSelector } from "react-redux";
import { selectDishes } from "api/selectors";

type SetPropsType = {
  set: setType;
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const DishesList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Set = ({ set }: SetPropsType) => {
  const dishes = useSelector(selectDishes);
  const [dishesSet, setDishesSet] = useState<dishInterface[][]>([]);
  useEffect(() => {
    const tempDishArray = [];
    for (let category in set.dishes) {
      const dishesId = set.dishes[category];
      const dishesByCategory = dishesId.map((item) =>
        dishes.find((dish) => dish.id === item)
      );
      tempDishArray.push(dishesByCategory);
      setDishesSet(tempDishArray as dishInterface[][]);
    }
  }, []);

  const dishesList = dishesSet.map((item, index) => (
    <Card key={index} dishes={item} />
  ));

  return (
    <Wrapper>
      <h2>{set.name} </h2>
      <DishesList>{dishesList}</DishesList>
    </Wrapper>
  );
};
export default Set;
