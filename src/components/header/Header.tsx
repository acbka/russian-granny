import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import granny from "assets/granny.png";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import Basket from "components/Basket";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
  background: #fff;
  z-index: 100;
`;
const Logo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoImg = styled.img`
  display: block;
  height: 100px;
  width: auto;
  margin-right: 20px;
`;
const Title = styled.p`
  color: var(--color-main);
  font-size: 1.8rem;
  font-weight: 600;
`;

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

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [onHover, setonHover] = useState(false);

  return (
    <Wrapper>
      <Logo>
        <LogoImg src={granny} alt="logo" />
        <Title>Russian Granny</Title>
      </Logo>
      <Nav>
        <MenuItem to="/">Home</MenuItem>
        <DropDownMenuItem onClick={() => setisOpen(!isOpen)}>
          Dishes
        </DropDownMenuItem>
        <MenuItem to="/sets">Sets</MenuItem>
        <MenuItem to="/order">
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
    </Wrapper>
  );
};

export default Header;
