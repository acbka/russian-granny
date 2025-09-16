import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
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

const DishesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardWrap = styled(Card)`
  cursor: pointer;
`;

const StyledButton = styled(Button)`
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
  const navigate = useNavigate();
  const dishesInOrder = dishes.filter((dish) => dish.selected);
  const dishesByCategories = groupDishes(dishesInOrder);

  const createOrder = () => {
    dispatch(setDishesInOrder(dishesInOrder));
    navigate("/form");
  };

  const dishesList = dishesByCategories.map((item, index) => (
    <CardWrap
      key={index}
      dishes={item}
      handleClick={() => navigate(`/dishes/${item[0].category}`)}
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
        <DishesSection>{dishesList}</DishesSection>
        <StyledButton
          title="Processed to checkout"
          disabled={dishesInOrder.length < 8}
          handleClick={createOrder}
        />
      </Wrapper>
    </Layout>
  );
};

export default CartPage;
