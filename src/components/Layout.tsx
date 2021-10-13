import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import Header from "components/header/Header";
import Footer from "components/Footer";

type LayoutPropsType = {
  title?: string;
  children?: ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 110px;
  font-size: 1.1rem;
`;
const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 40px 40px 40px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 2.5rem;
  color: var(--color-main);
  letter-spacing: 0.25rem;
`;

const Layout = ({ title, children }: LayoutPropsType) => {
  return (
    <Wrapper>
      <Header />
      <Title>{title}</Title>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
