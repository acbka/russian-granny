import React from "react";
import styled from "styled-components/macro";
import { dishInterface } from "common/dishInterface";
import { categories } from "common/constants";

type CardPropsType = {
  dishes: dishInterface[];
  category?: string;
};

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.div<CardWrapPropsType>`
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  text-align: center;
  margin: 10px;
  color: ${(props) => props.color};
`;

const Card = ({ dishes }: CardPropsType) => {
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <img src={`/dishes/${item.pict}`} alt="item.name" />
      <h5>{item.name} </h5>
    </div>
  ));

  return (
    <Wrapper color={categories[category].color}>
      <h1>{category}</h1>
      {list}
    </Wrapper>
  );
};
export default Card;
