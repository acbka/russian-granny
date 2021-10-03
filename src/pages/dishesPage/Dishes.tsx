import React from "react";
import styled from "styled-components/macro";
import { selectDishes, selectDishesInOrder } from "api/selectors";
import { useAppDispatch } from "api/store";
import { addDishToOrder, removeDishFromOrder } from "api/dishesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "components/Footer";
import Header from "components/header/Header";
import Dish from "./Dish";
import { dishInterface } from "common/dishInterface";
import { categories } from "common/constants";

const Wrapper = styled.main`
  margin-top: 110px;
  font-size: 1.1rem;
`;
const Main = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1.25rem 2.5rem 2.5rem 2.5rem;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 2.5rem;
  color: var(--color-main);
  letter-spacing: .25rem;
`;

type Params = {
  category: string;
};
const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector(selectDishes);
  const dishesInOrder = useSelector(selectDishesInOrder);
  const { category } = useParams<Params>();
  const list = dishes
    .filter((item) => item.category.toLowerCase() === category)
    .map((item, index) => (
      <Dish
        key={index}
        dish={item}
        addDish={() => selectDish(item)}
        removeDish={() => removeDish(item)}
      />
    ));

  const selectDish = (value: dishInterface) => {
    if (
      dishesInOrder.filter((item) => item.category === value.category).length <
      categories[value.category].count
    )
      dispatch(addDishToOrder(value));
  };

  const removeDish = (value: dishInterface) => {
    dispatch(removeDishFromOrder(value));
  };

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
