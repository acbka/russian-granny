import React from "react";
import styled from "styled-components/macro";
import { dishInterface } from "common/dishInterface";
import { useSelector } from "react-redux";
import { selectDishesInOrder } from "api/selectors";
import Button from "components/Button";
import { categories } from "common/constants";

type DishPropsType = {
  dish: dishInterface;
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
  max-width: 255px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.isShadow ? "none" : "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"};
  margin: 30px 15px;
`;

const Image = styled.img`
  width: 100%;
`;
const Info = styled.ul`
  justify-self: start;
  list-style-type: none;
  padding: 25px;
  & > li {
    line-height: 1.5rem;
    text-transform: capitalize;
  }
`;
const Title = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  padding-bottom: 10px;
`;
const SubTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 10px;
`;
const ButtonWrap = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
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
