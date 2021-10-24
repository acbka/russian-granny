import React, { useState, useEffect, useRef, MutableRefObject } from "react";
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
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      setisOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref]);

  return (
    <Nav ref={ref}>
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
      {isOpen && <DropDownMenu setIsOpen={() => setisOpen(!isOpen)} />}
    </Nav>
  );
};

export default NavBar;
