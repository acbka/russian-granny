import React from "react";
import styled from "styled-components/macro";
import Layout from "components/Layout";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FinalPage = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Thank you </h1>
        <p>You order #876814 is confirmed.</p>
        <p>Your Russian granny is cooking meal for you.</p>
        <h2>Here are your order details:</h2>
        <ul>
          <li>Order reference id:</li>
          <li>Order delivery date: </li>
          <li>Order delivery address: </li>
          <li>Your phone number:</li>
        </ul>
        <h2>Your order includes:</h2>
        <ul>
          <li>Main dishes:</li>
          <li>Soups: </li>
          <li>Side dishes: </li>
          <li>Salad:</li>
          <li>Dessert:</li>
        </ul>
        <p>Payment ($79.99) should be made upon delivery of the order.</p>
      </Wrap>
    </Layout>
  );
};

export default FinalPage;
