import React from "react";
import styled from "styled-components/macro";
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
  padding-top: 110px;
`;

const WarningWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  padding: 3rem 0;
`;

const Warning = styled.h1`
  color: var(--color-main);
  font-size: 6rem;
  letter-spacing: 1rem;
  padding-bottom: 2rem;
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <WarningWrap>
        <Warning>404</Warning>
        <p>Page not found</p>
        <p>
          Please start your order from the <Link to="/">Home Page</Link>{" "}
        </p>
      </WarningWrap>
    </Wrapper>
  );
};
export default ErrorPage;
