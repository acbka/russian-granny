import React from "react";
import styled from "styled-components/macro";
import NavBar from "components/NavBar";
import backgroundImage from "../assets/background.jpeg";

const Wrapper = styled.section`
  margin-top: 110px;
`;
const Main = styled.section`
  padding: 100px 50px 120px 50px;
  background: center right url(${backgroundImage});
`;
const MainTitle = styled.h1`
  color: var(--color-main);
  font-size: 3rem;
  text-align: center;
`;
const SubTitle = styled.p`
  width: 60%;
  font-size: 1.8rem;
  text-align: left;
  margin: 50px;
  line-height: 2.5rem;
`;
const Discount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-main);
  width: 230px;
  height: 100px;
  margin-left: 50px;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <NavBar />
      <Main>
        <MainTitle>Delivery of delicious Russian dishes</MainTitle>
        <SubTitle>
          The best service for the cooking of delicious home-made food with free
          delivery in Auckland
        </SubTitle>
        <Discount>
          <p>$10 discount</p>
          <p>for the first order</p>
        </Discount>
      </Main>
    </Wrapper>
  );
};

export default HomePage;
