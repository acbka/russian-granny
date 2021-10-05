import Footer from "components/Footer";
import Header from "components/header/Header";
import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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

const ContactFormPage = () => {
  return (
    <Wrapper>
      <Header />
        <Main>
           <Title>Contact details</Title>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default ContactFormPage;
