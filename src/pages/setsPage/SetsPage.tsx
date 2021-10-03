import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Footer from "components/Footer";
import { selectDishes } from "api/selectors";
import { useSelector } from "react-redux";
import { dishInterface } from "common/dishInterface";
import Header from "components/header/Header";
import Set from "./Set";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 110px;
  font-size: 1.1rem;
`;
const Main = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 40px 40px 40px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 40px;
  color: var(--color-main);
  letter-spacing: 4px;
`;

const SetsPage = () => {
  const dishes = useSelector(selectDishes);
  const [sets, setSets] = useState<dishInterface[][]>([]);

  useEffect(() => {
    let tempSets: dishInterface[][] = [];
    for (let i = 1; i <= 4; i++) {
      let set = dishes.filter((dish) => dish.sets.includes(i));
      tempSets = [...sets, set];
    }
    setSets(tempSets);
  }, []);

  const setsList = sets.map((item, index) => <Set key={index} set={item} />);

  return (
    <Wrapper>
      <Header />
      <Title>Dishes' Sets </Title>
      <Main>{setsList}</Main>
      <Footer />
    </Wrapper>
  );
};

export default SetsPage;
