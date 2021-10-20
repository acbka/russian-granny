import React from "react";
import styled from "styled-components/macro";
import { selectDishes } from "api/selectors";
import { useSelector, useDispatch } from "react-redux";
import Layout from "components/Layout";
import Card from "components/Card";
import { useHistory } from "react-router";
import Button from "components/Button";
import { groupDishes } from "common/groupDishes";
import { setDishesInOrder } from "api/slises/orderSlice";

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

const CartPage = () => {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const history = useHistory();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const dishesByCategories = groupDishes(dishesInOrder);

  const createOrder = () => {
    dispatch(setDishesInOrder(dishesInOrder));
    history.push("/form");
  };

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
          handleClick={createOrder}
        />
      </Wrapper>
    </Layout>
  );
};

export default CartPage;
