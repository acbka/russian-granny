import React, { ReactNode, useEffect } from "react";
import styled from "styled-components/macro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

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

type LayoutPropsType = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title, children }: LayoutPropsType) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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
