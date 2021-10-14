import React from "react";
import styled from "styled-components/macro";
import { dishType } from "common/types";
import { categories } from "common/constants";

type CardPropsType = {
  dishes: dishType[];
  handleClick?: () => void;
  className?: string;
};

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.div<CardWrapPropsType>`
  max-width: 190px;
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  text-align: center;
  margin: 10px;
  border-color: ${(props) => props.color};
  padding: 0 15px;
  margin: 15px;
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
const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Card = ({ dishes, handleClick, className }: CardPropsType) => {
  console.log({ dishes });
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <figure>
        <StyledImg src={`/dishes/${item.pict}`} alt="item.name" />
      </figure>
      <Name>{item.name} </Name>
    </div>
  ));

  return (
    <Wrapper
      color={categories[category].color}
      onClick={handleClick}
      className={className}
    >
      <Title color={categories[category].color}>{category}</Title>
      {list}
    </Wrapper>
  );
};
export default Card;
