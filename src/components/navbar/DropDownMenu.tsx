import React from "react";
import styled from "styled-components/macro";
import { categories } from "common/constants";
import DropDownMenuItem from "./DropDownMenuItem";

type DropDownMenuPropsType = {
  setIsMenuOpen: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 164px;
  z-index: 10;
  float: left;
  min-width: 135px;
  background-color: #fff;
  z-index: 115;
`;

const DropDownMenu = ({ setIsMenuOpen }: DropDownMenuPropsType) => {
  const menuItems = Object.keys(categories).map((item, index) => (
    <DropDownMenuItem
      key={index}
      category={item}
      setIsMenuOpen={setIsMenuOpen}
    />
  ));

  return <Wrapper>{menuItems}</Wrapper>;
};

export default DropDownMenu;
