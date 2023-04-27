import React, { useState, useRef, MutableRefObject } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { categories } from "../../common/constants";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import DropDownMenuItem from "./DropDownMenuItem";
import Basket from "../IconComponents/Basket";
import Burger from "../IconComponents/Burger";

const Wrapper = styled.nav`
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

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  useOnClickOutside(ref.current, () => setOpen(false));

  const menuItems = Object.keys(categories).map((item, index) => (
    <DropDownMenuItem
      key={index}
      category={item}
      setIsMenuOpen={() => setOpen(false)}
    />
  ));

  return (
    <div ref={ref}>
      <Burger handleClick={() => setOpen(!open)} />
      {open && (
        <Wrapper>
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
      )}
    </div>
  );
};

export default BurgerMenu;
