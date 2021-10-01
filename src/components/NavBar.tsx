import React from "react";
import styled from "styled-components/macro";
import granny from "../assets/granny.png";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 110px;
  display: flex;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img`
  display: block;
  height: 100%;
  width: auto;
  margin-right: 20px;
`;
const Title = styled.p`
  color: var(--color-main);
  font-size: 1.8rem;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoImg src={granny} alt="logo" />
        <Title>Russian Granny</Title>
      </Logo>
    </Wrapper>
  );
};

export default NavBar;
