import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { selectDishes } from "api/selectors";
import { useAppDispatch } from "api/store";
import { updateDishes } from "api/slises/dishesSlice";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router";
import Dish from "./Dish";
import { DishType } from "common/types";
import { categories } from "common/constants";
import Layout from "components/Layout";
import SideCart from "components/SideCart";

type Params = {
  category: string;
};

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--color-main);
  letter-spacing: 0.25rem;
`;
const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1140px;
  padding: 20px 0 40px;
`;

const DishesPage = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector(selectDishes);
  const { category } = useParams<Params>();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const list = dishes
    .filter((item) => item.category.toLowerCase() === category)
    .map((item, index) => (
      <Dish
        key={index}
        dish={item}
        addDish={() => addDish(item)}
        removeDish={() => removeDish(item)}
      />
    ));

  const addDish = (dish: DishType) => {
    if (
      dishes.filter((item) => item.selected && item.category === dish.category)
        .length < categories[dish.category].count
    ) {
      const tempDish = { ...dish, selected: true };
      dispatch(updateDishes(tempDish));
    }
  };

  const removeDish = (dish: DishType) => {
    const tempDish = { ...dish, selected: false };
    dispatch(updateDishes(tempDish));
  };

  return (
    <Layout>
      <TitleWrap>
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      </TitleWrap>
      <Main>{list}</Main>
      <SideCart />
    </Layout>
  );
};

export default DishesPage;
