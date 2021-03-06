import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { selectDishes, selectSets } from "api/selectors";
import { useAppDispatch } from "api/store";
import { updateDishes } from "api/slises/dishesSlice";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router";
import Dish from "./Dish";
import { DishType } from "common/types";
import { categories } from "common/constants";
import Layout from "components/Layout";
import SideCart from "components/SideCart";
import Search from "components/Search";
import { updateSets } from "api/slises/setsSlice";

type Params = {
  category: string;
};

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
  const sets = useSelector(selectSets);
  const { category } = useParams<Params>();
  const { pathname } = useLocation();
  const [FilteredDishes, setFilteredDishes] = useState<DishType[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setFilteredDishes(
      dishes.filter((item) => item.category.toLowerCase() === category)
    );
  }, [dishes, category]);

  const list = FilteredDishes.map((item, index) => (
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
    sets.forEach(
      (set) =>
        set.selected &&
        set.dishesId.filter((item) =>
          item === dish.id
            ? dispatch(updateSets({ ...set, selected: false }))
            : ""
        )
    );
  };

  return (
    <Layout>
      <TitleWrap>
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
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
