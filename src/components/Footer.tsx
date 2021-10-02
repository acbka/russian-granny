import React from "react";
import styled from "styled-components/macro";
import footer from "assets/footer.jpeg";
import granny from "assets/granny.png";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-main);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.7);
  background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(220, 220, 220, 0.3)
      )
      0 0 / cover,
    url(${footer}) center no-repeat;
  padding: 5px 150px;
  z-index: 100;
`;
const LogoText = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
const LogoImg = styled.img`
  display: block;
  height: 100%;
  width: auto;
  margin-right: 20px;
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  & > h2 {
    font-size: 2rem;
  }
  & > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <LogoText>Russian Granny</LogoText>
      <LogoImg src={granny} alt="logo" />
      <Contacts>
        <h2>Contacts</h2>
        <p>46 Queen St, Auckland</p>
        <p>tel: 022 1020304</p>
      </Contacts>
    </Wrapper>
  );
};

export default Footer;
