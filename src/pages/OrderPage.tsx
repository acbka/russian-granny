import React from "react";
import styled from "styled-components/macro";
import { selectDishes} from "api/selectors";
import { useSelector } from "react-redux";
import Layout from "components/Layout";

const OrderPage = () => {
  const dishes = useSelector(selectDishes);
  // console.log(dishes)

  return <Layout title="Order"></Layout>;
};

export default OrderPage;
