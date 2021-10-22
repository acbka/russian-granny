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
  color: #ff0000;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <WarningWrap>
        <Warning>Warning!</Warning>
        <p>This page is unavailable.</p>
        <p>
          Please start your order from the <Link to="/">Home Page</Link>{" "}
        </p>
      </WarningWrap>
    </Wrapper>
  );
};
export default ErrorPage;
