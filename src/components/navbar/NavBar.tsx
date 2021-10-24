import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import Basket from "components/Basket";
import Burger from "components/Burger";
import BurgerMenu from "./BurgerMenu";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setisBurgerMenuOpen] = useState(false);
  const [onHover, setonHover] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowSize && windowSize > 850 ? (
        <Nav ref={ref}>
          <MenuItem to="/">Home</MenuItem>
          <DropDownMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          {isMenuOpen && (
            <DropDownMenu setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </Nav>
      ) : (
        <Burger handleClick={() => setisBurgerMenuOpen(!isBurgerMenuOpen)} />
      )}
      {isBurgerMenuOpen && (
        <BurgerMenu
          setIsMenuOpen={() => setisBurgerMenuOpen(!isBurgerMenuOpen)}
        />
      )}
    </>
  );
};

export default NavBar;
