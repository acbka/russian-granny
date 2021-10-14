import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { dishType, setType } from "common/types";
import { selectSets } from "api/selectors";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Button from "components/Button";
import { categories } from "common/constants";
import beef from "assets/beef.png";
import pork from "assets/pork.png";
import dairy from "assets/dairy.png";

type SetPropsType = {
  set: setType;
  addSetToOrder: (arg: setType) => void;
  removeSetFromOrder: (arg: setType) => void;
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
  justify-content: space-between;
  margin: 10px 0;
`;

const Set = ({ set, addSetToOrder, removeSetFromOrder }: SetPropsType) => {
  const sets = useSelector(selectSets);
  const [dishesSet, setDishesSet] = useState<dishType[][]>([]);

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
        {set.dishes.filter((dish) => dish.dairyFree).length ===
          set.dishes.length && <StyledImg src={dairy} alt="dairy free" />}
        {set.dishes.filter((dish) => dish.beefFree).length ===
          set.dishes.length && <StyledImg src={beef} alt="beef free" />}
        {set.dishes.filter((dish) => dish.porkFree).length ===
          set.dishes.length && <StyledImg src={pork} alt="pork free" />}
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
