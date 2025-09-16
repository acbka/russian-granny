import React, { useState } from "react";
import styled from "styled-components/macro";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishes } from "api/selectors";
import { groupDishes } from "utils/groupDishes";
import Button from "./Button";
import Basket from "./IconComponents/Basket";
import MiniCard from "./MiniCard";

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
  z-index: 20;
  transition: right 0.3s;
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
  font-size: 0.9rem;
`;

const SideCart = () => {
  const dishes = useSelector(selectDishes);
  const navigate = useNavigate();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const dishesByCategories = groupDishes(dishesInOrder);
  const [isHidden, setIsHidden] = useState(true);

  const dishesList = dishesByCategories.map((item, index) => (
    <MiniCard
      key={index}
      dishes={item}
      handleClick={() => {
        navigate(`/dishes/${item[0].category}`);
        setIsHidden(true);
      }}
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
            <StyledLink to={"/cart"}>Checkout</StyledLink>
          )}
        </DishesBlock>
      </Wrapper>
    </>
  );
};

export default SideCart;
