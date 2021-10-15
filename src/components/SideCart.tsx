import React, { useState } from "react";
import styled from "styled-components/macro";
import { selectDishes } from "api/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "components/Button";
import { groupDishes } from "common/groupDishes";
import Basket from "components/Basket";
import MiniCard from "./MiniCard";
import { Link } from "react-router-dom";

type WrapperPrpsType = {
  isHidden: boolean;
};

const Wrapper = styled.section<WrapperPrpsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: fixed;
  top: 120px;
  right: ${(props) => (props.isHidden ? "-160px" : 0)};
  z-index: 10;
  cursor: pointer;
`;
const DishesBlock = styled.div`
  width: 160px;
  background: var(--color-main);
  border: 1px solid var(--color-main);
  overflow: hidden;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const CardWrap = styled(MiniCard)`
  cursor: pointer;
`;
const StyledParagraph = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  -webkit-text-orientation: upright;
  text-orientation: upright;
  margin-top: 10px;
`;
const StyledLink = styled(Link)`
  color: #fff;
`;
const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 150px;
  background: var(--color-main);
  border: 3px solid var(--color-main);
  border-right: none;
  border-radius: 15px 0 0 15px;
  padding: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const SideCart = () => {
  const dishes = useSelector(selectDishes);
  const history = useHistory();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const dishesByCategories = groupDishes(dishesInOrder);
  const [isHidden, setIsHidden] = useState(true);

  const dishesList = dishesByCategories.map((item, index) => (
    <CardWrap
      key={index}
      dishes={item}
      handleClick={() => history.push(`/dishes/${item[0].category}`)}
    />
  ));

  return (
    <>
      <Wrapper isHidden={isHidden}>
        <StyledButton handleClick={() => setIsHidden(!isHidden)}>
          <Basket color="#fff" />
          <StyledParagraph>Cart</StyledParagraph>
        </StyledButton>
        <DishesBlock>
          {dishesList}
          {dishesInOrder.length >= 8 && (
            <StyledLink to={"/order"}>Continue</StyledLink>
          )}
        </DishesBlock>
      </Wrapper>
    </>
  );
};

export default SideCart;
