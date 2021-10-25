import React, { useEffect, useRef, MutableRefObject } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Basket from "components/IconComponents/Basket";
import { categories } from "common/constants";
import DropDownMenuItem from "./DropDownMenuItem";

type BurgerMenuPropsType = {
  setIsMenuOpen: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 110px;
  right: 0px;
  z-index: 10;
  float: left;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  z-index: 115;
`;
const MenuItem = styled(Link)`
  padding: 10px;
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 500;
`;
const MenuBasket = styled.span`
  display: flex;
  align-items: center;
`;

const BurgerMenu = ({ setIsMenuOpen }: BurgerMenuPropsType) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      setIsMenuOpen();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref,setIsMenuOpen]);

  const menuItems = Object.keys(categories).map((item, index) => (
    <DropDownMenuItem
      key={index}
      category={item}
      setIsMenuOpen={setIsMenuOpen}
    />
  ));

  return (
    <Wrapper ref={ref} onClick={setIsMenuOpen}>
      <MenuItem to="/">Home</MenuItem>
      {menuItems}
      <MenuItem to="/sets">Sets</MenuItem>
      <MenuItem to="/cart">
        <MenuBasket>
          <Basket color="var(--color-main)" />
          Cart
        </MenuBasket>
      </MenuItem>
    </Wrapper>
  );
};

export default BurgerMenu;
