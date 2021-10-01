import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styled from "styled-components/macro";
import { selectDishes } from "api/dishesSlice";
import { useAppDispatch } from "api/store";
import { useSelector } from "react-redux";

const Wrapper = styled.main`
  margin: 110px 0 120px 0;
  font-size: 1.1rem;
`;

const SoupsPage = () => {
  const dishes = useSelector(selectDishes);
  const soups = dishes.filter((item) => item.category === "Soups");

  return (
    <Wrapper>
      <Navbar />
      <div>{soups[0].name}</div>
      <Footer />
    </Wrapper>
  );
};

export default SoupsPage;
