import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { selectDishes } from "api/selectors";
import { useSelector } from "react-redux";
import { dishType } from "common/types";
import { categories, emptyDish } from "common/constants";
import Layout from "components/Layout";
import Spinner from "components/Spinner";
import Card from "components/Card";
import { useHistory } from "react-router";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CardWrap = styled(Card)`
  cursor: pointer;
`;

const OrderPage = () => {
  const dishes = useSelector(selectDishes);
  const history = useHistory();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const [dishesByCategories, setDishesByCategories] = useState<dishType[][]>(
    []
  );

  useEffect(() => {
    let tempDishArray: dishType[][] = [];
    for (let category in categories) {
      let count = dishesInOrder.filter(
        (dish) => dish.category === category
      ).length;
      let dishesByCategory: dishType[] = [];
      if (categories[category].count === 2) {
        switch (count) {
          case 0:
            dishesByCategory = [
              { ...emptyDish, category: category },
              { ...emptyDish, category: category },
            ];
            break;
          case 1:
            dishesByCategory = [
              dishesInOrder.filter((dish) => dish.category === category)[0],
              { ...emptyDish, category: category },
            ];
            break;
          case 2:
            dishesByCategory = [
              dishesInOrder.filter((dish) => dish.category === category)[0],
              dishesInOrder.filter((dish) => dish.category === category)[1],
            ];
        }
      } else {
        switch (count) {
          case 0:
            dishesByCategory = [{ ...emptyDish, category: category }];
            break;
          case 1:
            dishesByCategory = [
              dishesInOrder.filter((dish) => dish.category === category)[0],
            ];
        }
      }
      tempDishArray.push(dishesByCategory);
      setDishesByCategories(tempDishArray);
    }
  }, []);

  const dishesList = dishesByCategories.map((item, index) => (
    <CardWrap
      key={index}
      dishes={item}
      handleClick={() => history.push(`/dishes/${item[0].category}`)}
    />
  ));

  return (
    <Layout title="Order">
      <Wrapper>{dishesList}</Wrapper>
    </Layout>
  );
};

export default OrderPage;
