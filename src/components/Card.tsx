import React from "react";
import styled from "styled-components/macro";
import { dishInterface } from "common/dishInterface";
import { categories } from "common/constants";

type CardPropsType = {
  dishes: dishInterface[];
  children?: React.ReactNode;
};

type CardWrapPropsType = {
  color: string;
};

const Wrapper = styled.header<CardWrapPropsType>`
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  text-align: center;
  margin: 10px;
  color: ${(props) => props.color};
`;

const Card = ({ dishes, children }: CardPropsType) => {
   console.log(dishes)
  const category = dishes[0].category;
  const list = dishes.map((item, index) => (
    <div key={index}>
      <img src={`/dishes/${item.pict}`} alt="item.name" />
      <h5>{item.name} </h5>
    </div>
  ));

  return (
    <Wrapper color={categories[category].color}>
      <h2>{category}</h2>
      {list}
    </Wrapper>
  );
};
export default Card;