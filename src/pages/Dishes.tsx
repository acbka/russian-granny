import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styled from "styled-components/macro";
import { selectDishes } from "api/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Dish from "./Dish";
import { dishInterface } from "common/dishInterface";

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
  font-size: 2.5rem;
  padding-top: 40px;
`;

// type Params = {
//    category: string;
//  };
const Dishes = () => {
  const dishes = useSelector(selectDishes);
  const category = "Soups";
  const addDish = (value: dishInterface) => {};

  console.log(dishes);
  const list = dishes
    .filter((item) => item.category === category)
    .map((item, index) => (
      <Dish key={index} dish={item} addDish={() => addDish(item)} />
    ));

  return (
    <Wrapper>
      <Navbar />
      <Title>{category} </Title>
      <Main>{list}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Dishes;
