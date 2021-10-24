import React from "react";
import styled from "styled-components/macro";
import { Dish } from "common/types";
import { categories } from "common/constants";

type CardPropsType = {
  dishes: Dish[];
  handleClick?: () => void;
  className?: string;
};

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.div<CardWrapPropsType>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.color};
`;
const StyledImg = styled.img`
  display: block;
  width: 60px;
  height: auto;
`;

const MiniCard = ({ dishes, handleClick, className }: CardPropsType) => {
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <figure>
        <StyledImg src={`/dishes/${item.pict}`} alt="item.name" />
      </figure>
    </div>
  ));

  return (
    <Wrapper
      color={categories[category].color}
      onClick={handleClick}
      className={className}
    >
      {list}
    </Wrapper>
  );
};
export default MiniCard;
