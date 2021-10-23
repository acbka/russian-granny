import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import Basket from "components/Basket";

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const Item = css`
  padding: 15px;
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 500;
`;
const MenuItem = styled(Link)`
  ${Item}
`;
const DropDownMenuItem = styled.span`
  ${Item}
  position: relative;
  & :hover {
    color: var(--color-second);
  }
  cursor: pointer;
`;
const MenuBasket = styled.span`
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [onHover, setonHover] = useState(false);

  return (
    <>
      <Nav>
        <MenuItem to="/">Home</MenuItem>
        <DropDownMenuItem onClick={() => setisOpen(!isOpen)}>
          Dishes
        </DropDownMenuItem>
        <MenuItem to="/sets">Sets</MenuItem>
        <MenuItem to="/cart">
          <MenuBasket
            onMouseEnter={() => setonHover(true)}
            onMouseLeave={() => setonHover(false)}
          >
            <Basket
              color={onHover ? "var(--color-second)" : "var(--color-main)"}
            />
            Cart
          </MenuBasket>
        </MenuItem>
      </Nav>
      {isOpen && <DropDownMenu setIsOpen={() => setisOpen(!isOpen)} />}
    </>
  );
};

export default NavBar;
