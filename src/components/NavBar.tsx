import React from "react";
import styled from "styled-components/macro";
import granny from "assets/granny.png";
import { Link } from "react-router-dom";

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
  z-index: 5;
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
const MenuItem = styled(Link)`
padding: 15px;
color: var(--color-main);
font-size: 1.2rem;
font-weight: 500;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoImg src={granny} alt="logo" />
        <Title>Russian Granny</Title>
      </Logo>
      <nav>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/soups" >Dishes</MenuItem>
        <MenuItem to="/sets" >Sets</MenuItem>
        <MenuItem to="/cart" >Cart</MenuItem>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
