import { categories } from "common/constants";
import React from "react";
import styled from "styled-components/macro";
import DropDownMenuItem from "./DropDownMenuItem";

type DropDownMenuPropsType = {
  setIsOpen: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 135px;
  z-index: 10;
  float: left;
  min-width: 120px;
  background-color: #fff;
  z-index: 10;
`;

const DropDownMenu = ({ setIsOpen }: DropDownMenuPropsType) => {
  const menuItems = Object.keys(categories).map((item, index) => (
    <DropDownMenuItem key={index} category={item} setIsOpen={setIsOpen} />
  ));
  return <Wrapper>{menuItems}</Wrapper>;
};

export default DropDownMenu;
