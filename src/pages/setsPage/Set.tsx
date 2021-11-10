import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { DishType, SetType } from "common/types";
import { selectDishes, selectSets } from "api/selectors";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Button from "components/Button";
import { categories } from "common/constants";
import beef from "assets/beef.png";
import pork from "assets/pork.png";
import dairy from "assets/dairy.png";

type SetPropsType = {
  set: SetType;
  addSetToOrder: (arg: SetType) => void;
  removeSetFromOrder: (arg: SetType) => void;
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
const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  & > h2 {
    font-weight: 400;
  }
`;
const StyledImg = styled.img`
  border: 2px solid #000;
  border-radius: 50%;
  display: block;
  margin: 0 8px;
  padding: 3px;
  width: 36px;
  height: 36px;
`;
const DishesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
`;

const Set = ({ set, addSetToOrder, removeSetFromOrder }: SetPropsType) => {
  const sets = useSelector(selectSets);
  const dishes = useSelector(selectDishes);
  const [dishesSet, setDishesSet] = useState<DishType[][]>([]);

  const setWithDishes = set.dishesId.map((item) =>
    dishes.find((dish) => dish.id === item)
  );

  useEffect(() => {
    const tempDishArray = [];
    for (let category in categories) {
      const dishesByCategory = setWithDishes?.filter(
        (dish) => dish!.category === category
      );
      tempDishArray.push(dishesByCategory);
      setDishesSet(tempDishArray as DishType[][]);
    }
  }, [setWithDishes]);

  const unselectSet = () => {
    removeSetFromOrder(set);
  };

  const selectSet = () => {
    addSetToOrder(set);
  };

  const dishesList = dishesSet.map((item, index) => (
    <Card key={index} dishes={item} />
  ));

  return (
    <Wrapper>
      <TitleWrap>
        <h2>{set.name} </h2>
        {setWithDishes.filter((dish) => dish!.dairyFree).length ===
          setWithDishes.length && <StyledImg src={dairy} alt="dairy free" />}
        {setWithDishes.filter((dish) => dish!.beefFree).length ===
          setWithDishes.length && <StyledImg src={beef} alt="beef free" />}
        {setWithDishes.filter((dish) => dish!.porkFree).length ===
          setWithDishes.length && <StyledImg src={pork} alt="pork free" />}
      </TitleWrap>
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
