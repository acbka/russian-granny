import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { DishType } from "common/types";
import { useAppDispatch } from "api/store";
import { selectDishes, selectSets } from "api/selectors";
import {
  addDish as addDishAction,
  removeDish as removeDishAction,
} from "utils/dishHandlers";
import Layout from "components/Layout";
import Search from "components/Search";
import SideCart from "components/SideCart";
import Dish from "../components/Dish";

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--color-main);
  letter-spacing: 0.25rem;
  text-transform: capitalize;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1140px;
  padding: 20px 0 40px;
`;

type Params = {
  category: string;
};

const DishesPage = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector(selectDishes);
  const sets = useSelector(selectSets);
  const { category } = useParams<Params>();
  const [FilteredDishes, setFilteredDishes] = useState<DishType[]>([]);

  useEffect(() => {
    setFilteredDishes(
      dishes.filter((item) => item.category.toLowerCase() === category)
    );
  }, [dishes, category]);

  const list = FilteredDishes.map((item, index) => (
    <Dish
      key={index}
      dish={item}
      addDish={() => addDishAction(item, dishes, dispatch)}
      removeDish={() => removeDishAction(item, sets, dispatch)}
    />
  ));

  return (
    <Layout>
      <TitleWrap>
        <Title>{category}</Title>
        {Boolean(dishes.length) && (
          <Search
            dishes={dishes.filter(
              (item) => item.category.toLowerCase() === category
            )}
            setSearchDishes={(value) => setFilteredDishes(value)}
          />
        )}
      </TitleWrap>
      <Main>{list}</Main>
      <SideCart />
    </Layout>
  );
};

export default DishesPage;
