import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectDishes } from "../api/selectors";
import { setDishesInOrder } from "../api/slises/orderSlice";
import { groupDishes } from "../common/groupDishes";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 40px;
`;

const DishesPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardWrap = styled(Card)`
  cursor: pointer;
`;

const ButtonWrap = styled(Button)`
  margin-top: 25px;
  width: 220px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;

const CartPage = () => {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const history = useHistory();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const dishesByCategories = groupDishes(dishesInOrder);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      {dishesInOrder.length !== 8 && (
        <Title>
          You should add {8 - dishesInOrder.length} more{" "}
          {8 - dishesInOrder.length === 1 ? "dish" : "dishes"} to complete the
          order
        </Title>
      )}
      <Wrapper>
        <DishesPage>{dishesList}</DishesPage>
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
