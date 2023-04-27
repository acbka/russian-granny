import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";
import Basket from "../IconComponents/Basket";

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
  & :after {
    display: inline-block;
    margin-left: 0.3rem;
    vertical-align: 0.255rem;
    content: "";
    border-top: 0.4rem solid;
    border-right: 0.4rem solid transparent;
    border-bottom: 0;
    border-left: 0.4rem solid transparent;
  }
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
  const [onHover, setonHover] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useOnClickOutside(ref.current, () => setIsMenuOpen(false));

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
        <BurgerMenu />
      )}
    </>
  );
};

export default NavBar;
