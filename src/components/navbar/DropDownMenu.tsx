import React from "react";
import { categories } from "common/constants";
import styled from "styled-components/macro";
import DropDownMenuItem from "./DropDownMenuItem";

type DropDownMenuPropsType = {
  setisMenuOpen: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 160px;
  z-index: 10;
  float: left;
  min-width: 120px;
  background-color: #fff;
  z-index: 115;
`;

const DropDownMenu = ({ setisMenuOpen }: DropDownMenuPropsType) => {
  const menuItems = Object.keys(categories).map((item, index) => (
    <DropDownMenuItem
      key={index}
      category={item}
      setisMenuOpen={setisMenuOpen}
    />
  ));
  return <Wrapper onBlur={setisMenuOpen}>{menuItems}</Wrapper>;
};

export default DropDownMenu;
