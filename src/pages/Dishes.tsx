import React from "react";
import Footer from "components/Footer";
import styled from "styled-components/macro";
import { selectDishes } from "api/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Dish from "./Dish";
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

type Params = {
  category: string;
};
const Dishes = () => {
  const dishes = useSelector(selectDishes);
  const addDish = (value: dishInterface) => {};
  const { category } = useParams<Params>();
  const list = dishes
    .filter((item) => item.category.toLowerCase() === category)
    .map((item, index) => (
      <Dish key={index} dish={item} addDish={() => addDish(item)} />
    ));

  return (
    <Wrapper>
      <Header />
      <Title>{category.charAt(0).toUpperCase() + category.slice(1)} </Title>
      <Main>{list}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Dishes;
