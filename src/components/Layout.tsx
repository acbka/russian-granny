import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import Header from "components/Header";
import Footer from "components/Footer";

type LayoutPropsType = {
  title?: string;
  children?: ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding-top: 110px;
  font-size: 1.1rem;
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
      <div>{children}</div>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
