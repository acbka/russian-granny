import React from "react";
import styled from "styled-components/macro";
import { selectDishes} from "api/selectors";
import { useSelector } from "react-redux";
import Layout from "components/Layout";
import Spinner from "components/Spinner";

const OrderPage = () => {
  const dishes = useSelector(selectDishes);
  // console.log(dishes)

   return <Layout title="Order">
     <Spinner />
  </Layout>;
};

export default OrderPage;
