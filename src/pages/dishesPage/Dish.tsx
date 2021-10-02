import { dishInterface } from "common/dishInterface";
import Button from "components/Button";
import React from "react";
import styled from "styled-components/macro";

type DishPropsType = {
  dish: dishInterface;
  addDish: () => void;
};

const Card = styled.div`
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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
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

const Dish = ({ dish, addDish }: DishPropsType) => {
  const ingredientsList = dish.ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <Card>
      <div>
        <Image src={`/dishes/${dish.pict}`} alt={dish.name} />
        <Info>
          <Title>{dish.name} </Title>
          <SubTitle>Ingredients:</SubTitle>
          {ingredientsList}
        </Info>
      </div>
      <ButtonWrap>
        <Button title="Add to order" handleClick={addDish} />
      </ButtonWrap>
    </Card>
  );
};

export default Dish;
