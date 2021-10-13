import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { dishType } from "common/types";
import Card from "../../components/Card";
import { setType } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import { selectDishes } from "api/selectors";
import Button from "components/Button";
import { addDishToOrder, removeDishFromOrder } from "api/dishesSlice";

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
  const [isOrder, setIsOrder] = useState(false);

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
    dishesSet.flat(1).forEach((dish) => dispatch(addDishToOrder(dish)));
    setIsOrder(true);
  };
  const removeSet = () => {
    dishesSet.flat(1).forEach((dish) => dispatch(removeDishFromOrder(dish)));
    setIsOrder(false);
  };

  return (
    <Wrapper>
      <h2>{set.name} </h2>
      <DishesList>{dishesList}</DishesList>
      {isOrder ? (
        <Button title="Remove" handleClick={removeSet} />
      ) : (
        <Button title="Add to order" handleClick={addSet} />
      )}
    </Wrapper>
  );
};
export default Set;
