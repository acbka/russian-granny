import React from "react";
import { dishInterface } from "common/dishInterface";
import styled from "styled-components/macro";
import { setType } from "common/setType";

type SetCardPropsType = {
  dishes: dishInterface[] | dishInterface;
};

const Wrapper = styled.div`
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  text-align: center;
  margin: 10px !important;
`;

const SetCard = ({ dishes }: SetCardPropsType) => {
  return <Wrapper></Wrapper>;
};
export default SetCard;
