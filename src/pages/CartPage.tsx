import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectDishes, selectSets } from "../api/selectors";
import { setDishesInOrder } from "api/slises/orderSlice";
import { groupDishes } from "utils/groupDishes";
import Layout from "components/Layout";
import OrderCard from "components/OrderCard";
import Button from "components/Button";
import { removeDish } from "utils/dishHandlers";
import { DishType } from "common/types";

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

const CardWrap = styled(OrderCard)`
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
  const sets = useSelector(selectSets);

  const createOrder = () => {
    dispatch(setDishesInOrder(dishesInOrder));
    navigate("/form");
  };

  const removeFromOrder = (dish: DishType) => removeDish(dish, sets, dispatch);

  const dishesList = dishesByCategories.map((items, index) => {
    return (
      <CardWrap
        key={index}
        dishes={items}
        handleClick={() => navigate(`/dishes/${items[0].category}`)}
        handleRemove={removeFromOrder}
      />
    );
  });

  return (
    <Layout title="Order">
      {dishesInOrder.length !== 8 && (
        <Title>
          Add {8 - dishesInOrder.length} more{" "}
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
