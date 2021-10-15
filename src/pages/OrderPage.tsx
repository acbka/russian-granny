import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { selectDishes } from "api/selectors";
import { useSelector } from "react-redux";
import { dishType } from "common/types";
import Layout from "components/Layout";
import Card from "components/Card";
import { useHistory } from "react-router";
import Button from "components/Button";
import { groupDishes } from "common/groupDishes";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Dishes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CardWrap = styled(Card)`
  cursor: pointer;
`;
const ButtonWrap = styled(Button)`
  margin-top: 25px;
  width: 220px;
`;

const OrderPage = () => {
  const dishes = useSelector(selectDishes);
  const history = useHistory();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const [dishesByCategories, setDishesByCategories] = useState<dishType[][]>(
    []
  );

  useEffect(() => {
    setDishesByCategories(groupDishes(dishesInOrder));
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
      <Wrapper>
        <Dishes>{dishesList}</Dishes>
        <ButtonWrap
          title="Processed to checkout"
          disabled={dishesInOrder.length < 8}
          handleClick={() => history.push("/form")}
        />
      </Wrapper>
    </Layout>
  );
};

export default OrderPage;
