import React from "react";
import styled from "styled-components/macro";
import { DishType } from "common/types";
import { categories } from "common/constants";
import cross from "assets/cross.png";

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.div<CardWrapPropsType>`
  width: 190px;
  height: 460px;
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  text-align: center;
  border-color: ${(props) => props.color};
  padding: 0 24px;
  margin: 16px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3<CardWrapPropsType>`
  font-weight: 400;
  font-size: 1.375rem;
  text-transform: capitalize;
  margin: 25px 0;
  border-bottom: 2px solid ${(props) => props.color};
`;

const Name = styled.h4`
  font-weight: 400;
  margin: 20px 0 35px 0;
`;

const Figure = styled.div`
  display: inline-block;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Cross = styled.img`
  width: 25px;
  height: auto;
  position: absolute;
  top: -19px;
  right: -19px;
`;

type CardPropsType = {
  dishes: DishType[];
  handleClick?: () => void;
};

const Card = ({ dishes, handleClick }: CardPropsType) => {
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <Figure>
        <StyledImg src={item.pict} alt={item.name} />
        {item.name !== "none" ? <Cross src={cross} alt="cross" /> : null}
      </Figure>
      <Name>{item.name} </Name>
    </div>
  ));

  return (
    <Wrapper color={categories[category].color} onClick={handleClick}>
      <Title color={categories[category].color}>{category}</Title>
      {list}
    </Wrapper>
  );
};
export default Card;
