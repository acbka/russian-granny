import React from "react";
import styled from "styled-components/macro";
import Footer from "components/Footer";
import { selectDishes } from "api/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Dish from "./dishes/Dish";
import { dishInterface } from "common/dishInterface";
import Header from "components/header/Header";

const Wrapper = styled.main`
  margin: 110px 0 120px 0;
  font-size: 1.1rem;
`;
const Main = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 40px 40px 40px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 40px;
  color: var(--color-main);
  letter-spacing: 4px;
`;

const OrderPage = () => {
  const dishes = useSelector(selectDishes);

  return (
    <Wrapper>
      <Header />
      <Title>Order </Title>
      <Main></Main>
      <Footer />
    </Wrapper>
  );
};

export default OrderPage;
