import React from "react";
import styled from "styled-components/macro";
import { DishType } from "../common/types";
import { categories } from "../common/constants";

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

type CardPropsType = {
  dishes: DishType[];
  handleClick?: () => void;
  className?: string;
};

const MiniCard = ({ dishes, handleClick, className }: CardPropsType) => {
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <figure>
        <StyledImg src={item.pict} alt={item.name} />
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
