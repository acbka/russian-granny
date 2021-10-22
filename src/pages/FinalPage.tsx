import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { selectOrder } from "api/selectors";
import { useSelector } from "react-redux";
import { categories } from "common/constants";
import { dishType } from "common/types";
import Header from "components/header/Header";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding-top: 110px;
  font-size: 1.1rem;
  background: #f5f5f5;
`;
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  color: var(--color-main);
  font-size: 3rem;
  padding-bottom: 1rem;
`;
const TitleText = styled.p`
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
`;
const SubTitle = styled.h2`
  font-size: 2rem;
  padding-bottom: 0.75rem;
  font-weight: 400;
  padding-top: 1rem;
`;
const List = styled.ul`
  list-style: none;
  & > li {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;
const Payment = styled.h3`
  font-size: 1.25rem;
  padding-top: 1rem;
`;
const WarningWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  padding: 3rem 0;
`;
const Warning = styled.h1`
  color: #ff0000;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const FinalPage = () => {
  const order = useSelector(selectOrder);
  const [dishesByCategory, setDishesByCategory] = useState<dishType[][]>([]);

  useEffect(() => {
    const dishesArray = [];
    for (let category in categories) {
      const dishes = order.dishes.filter((dish) => dish.category === category);
      dishesArray.push(dishes);
    }
    setDishesByCategory(dishesArray);
  }, [order.dishes]);

  return (
    <Wrapper>
      <Header />
      {!!order.dishes.length ? (
        <Wrap>
          <TitleWrap>
            <Title>Thank you {order.user.name.value} </Title>
            <TitleText>You order #358 is confirmed.</TitleText>
            <TitleText>Your Russian granny is cooking meal for you.</TitleText>
          </TitleWrap>
          <SubTitle>Here are your order details:</SubTitle>
          <List>
            <li>Order reference id: #358 </li>
            <li>Order delivery date: {order.user.date.value} </li>
            <li>Order delivery address:{order.user.address.value} </li>
            <li>Your phone number: {order.user.phone.value}</li>
          </List>
          <SubTitle>Your order includes:</SubTitle>
          <List>
            <li>
              Soups: {dishesByCategory[0][0].name},{" "}
              {dishesByCategory[0][1].name} (1 litre each).
            </li>
            <li>
              Main dishes: {dishesByCategory[1][0].name},{" "}
              {dishesByCategory[1][1].name} (1 kilogram each).
            </li>
            <li>
              Side dishes: {dishesByCategory[2][0].name},{" "}
              {dishesByCategory[2][1].name} (1 kilogram each).
            </li>
            <li>Salad: {dishesByCategory[3][0].name} (1 kilogram).</li>
            <li>Dessert: {dishesByCategory[4][0].name} (1 kilogram).</li>
          </List>
          <Payment>
            Payment ($79.99) should be made upon delivery of the order.
          </Payment>
        </Wrap>
      ) : (
        <WarningWrap>
          <Warning>Warning!</Warning>
          <p>This page is unavailable.</p>
          <p>
            Please start your order from the{" "}
            <Link to="/">Home Page</Link>{" "}
          </p>
        </WarningWrap>
      )}
      <Footer />
    </Wrapper>
  );
};

export default FinalPage;
