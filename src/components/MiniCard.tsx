import React from "react";
import styled from "styled-components/macro";
import { DishType } from "../common/types";
import { categories } from "../common/constants";

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.div<CardWrapPropsType>`
  background-color: ${(props) => props.color};
  font-size: 0.9rem;
  padding-top: 8px;
  text-transform: capitalize;
`;

const Category = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledImg = styled.img`
  display: block;
  width: 65px;
  padding: 5px;
  height: auto;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

type CardPropsType = {
  dishes: DishType[];
  handleClick?: () => void;
};

const MiniCard = ({ dishes, handleClick }: CardPropsType) => {
  const category = dishes[0].category;
  console.log(category);
  console.log("ggggg");
  const list = dishes.map((item, index) => (
    <div key={index}>
      <figure>
        <StyledImg src={item.pict} alt={item.name} />
      </figure>
    </div>
  ));

  return (
    <Wrapper color={categories[category].color}>
      <div>{category}</div>
      <Category onClick={handleClick}>{list}</Category>
    </Wrapper>
  );
};
export default MiniCard;
