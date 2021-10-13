import React from "react";
import styled from "styled-components/macro";
import { dishType } from "common/types";
import { useSelector } from "react-redux";
import { selectDishesInOrder } from "api/selectors";
import Button from "components/Button";
import { categories } from "common/constants";

type DishPropsType = {
  dish: dishType;
  addDish: () => void;
  removeDish: () => void;
};

type CardPropsType = {
  isShadow: boolean;
};

const Card = styled.div<CardPropsType>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 16rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.isShadow ? "none" : "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"};
  margin: 1.875rem 1rem;
`;

const Image = styled.img`
  width: 100%;
`;
const Info = styled.ul`
  justify-self: start;
  list-style-type: none;
  padding: 1.56rem;
  & > li {
    line-height: 1.5rem;
    text-transform: capitalize;
  }
`;
const Title = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  padding-bottom: 0.625rem;
`;
const SubTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.625rem;
`;
const ButtonWrap = styled.div`
  text-align: center;
  padding-bottom: 1.875rem;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
`;

const Dish = ({ dish, addDish, removeDish }: DishPropsType) => {
  const dishesInOrder = useSelector(selectDishesInOrder);
  const ingredientsList = dish.ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <Card
      isShadow={
        dishesInOrder.filter((item) => item.category === dish.category)
          .length >= categories[dish.category].count &&
        !dishesInOrder.find((item) => item.id === dish.id)
      }
    >
      <div>
        <Image src={`/dishes/${dish.pict}`} alt={dish.name} />
        <Info>
          <Title>{dish.name} </Title>
          <SubTitle>Ingredients:</SubTitle>
          {ingredientsList}
        </Info>
      </div>
      <ButtonWrap>
        {dishesInOrder.find((item) => item.id === dish.id) ? (
          <Button title="Remove" handleClick={removeDish} />
        ) : (
          <Button title="Add to order" handleClick={addDish} />
        )}
      </ButtonWrap>
      {dishesInOrder.filter((item) => item.category === dish.category).length >=
        categories[dish.category].count &&
        !dishesInOrder.find((item) => item.id === dish.id) && (
          <Overlay></Overlay>
        )}
    </Card>
  );
};

export default Dish;
