import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import backgroundImage from "assets/background.jpeg";
import pelmeni from "assets/pelmeni.jpeg";
import food from "assets/food.jpeg";
import zakaz from "assets/zakaz.jpg";
import Footer from "components/Footer";

const Wrapper = styled.main`
  margin-top: 110px;
  font-size: 1.1rem;
`;
const Main = styled.section`
  padding: 100px 50px 20px 50px;
  background: center right url(${backgroundImage});
`;
const MainTitle = styled.h1`
  color: var(--color-main);
  font-size: 3rem;
  text-align: center;
`;
const SubTitle = styled.p`
  width: 60%;
  font-size: 1.8rem;
  text-align: left;
  margin: 3.125rem;
  line-height: 2.5rem;
`;
const Discount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-main);
  width: 230px;
  height: 100px;
  margin: 5.625rem 3.125rem;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 100px;
  max-height: 530px;
  padding: 60px;
`;
const ImgWrap = styled.figure`
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & ul {
    margin-left: 20px;
  }
  & li {
    line-height: 1.5rem;
  }
`;
const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  margin: 20px 0;
  line-height: 1.5rem;
`;
const Paralax = styled.section`
  background: url(${zakaz}) center top/cover no-repeat fixed;
  padding: 60px;
  color: #fff;
  & > div {
    width: 60%;
  }
  & h2 {
    text-align: left;
  }
  & ul {
    margin-left: 20px;
  }
  & li {
    line-height: 1.5rem;
  }
`;
const InfoSection = styled(Section)`
  grid-template-columns: 1.5fr 1fr;
`;
const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 530px;
  background: #f5f5f5;
  padding: 60px;
  & h2 {
    color: var(--color-main);
  }
`;
const StyledLink = styled(Link)`
  color: var(--color-main);
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainTitle>Delivery of delicious Russian dishes</MainTitle>
        <SubTitle>
          The best service for the cooking of delicious home-made food with free
          delivery in Auckland
        </SubTitle>
        <Discount>
          <p>$10 discount</p>
          <p>for the first order</p>
        </Discount>
      </Main>
      <Section>
        <ImgWrap>
          <img src={pelmeni} alt="pelmeni" />
        </ImgWrap>
        <Info>
          <Title>Have a rest! We will take over looking after your food.</Title>
          <Paragraph>
            Imagine your beloved Russian grandmother came to your place and
            prepared tasty and varied home-made food for the whole family for
            the week ahead. You no longer need to stand by the hot stove and
            cook! You just have to take the dish that you want and warm it up!
          </Paragraph>
          <Paragraph>
            Our company has been operating since the beginning of 2016, but we
            are not new to this business. Our chefs are professionals who can
            cook more than one hundred delicious dishes. Our head-chef carefully
            monitors their preparation, and pays special attention to the
            quality and freshness of the products.
          </Paragraph>
        </Info>
      </Section>
      <Paralax>
        <Info>
          <Title>How can meals be stored, and for how long?</Title>
          <Paragraph>
            We deliver fresh dishes, and the packaging and storage of meals we
            use allows the dishes to remain fresh and tasty in the refrigerator
            for up to a week.
          </Paragraph>
          <Paragraph>
            You should follow simple rules so that the dishes do not deteriorate
            prematurely:
          </Paragraph>
          <ul>
            <li>Use only dry and clean appliances</li>
            <li>Close containers tightly</li>
            <li>
              Store containers in the refrigerator (between +3 - +5 degrees)
            </li>
            <li>Reheat meals in portions as needed.</li>
          </ul>
        </Info>
      </Paralax>
      <InfoSection>
        <Info>
          <Title>Order information</Title>
          <Paragraph>
            The order costs $79.99 and includes 8 dishes with a total weight of
            8 kg:
          </Paragraph>
          <li>
            <span>2 </span>
            <StyledLink to="/dishes/soups">soups</StyledLink>{" "}
            <span>1 litre each</span>{" "}
          </li>
          <li>
            <span>2 </span>
            <StyledLink to="/dishes/soups">main</StyledLink>{" "}
            <span>1 kg each</span>{" "}
          </li>
          <li>
            <span>2 </span>
            <StyledLink to="/dishes/sides">side dishes</StyledLink>{" "}
            <span>1 kg each</span>{" "}
          </li>
          <li>
            <span>1 </span>
            <StyledLink to="/dishes/salads">salad</StyledLink> <span>1 kg</span>{" "}
          </li>
          <li>
            <span>1 </span>
            <StyledLink to="/dishes/desserts">dessert</StyledLink>{" "}
            <span>1 kg</span>{" "}
          </li>
          <Paragraph>
            This volume of food is enough for one person for approximately 4-5
            days.
          </Paragraph>
          <Paragraph>
            <span>We prepare some </span>
            <StyledLink to="/sets">dish sets</StyledLink>{" "}
            <span>to help you make a choice.</span>
          </Paragraph>
        </Info>
        <ImgWrap>
          <img src={food} alt="food" />
        </ImgWrap>
      </InfoSection>
      <PaymentSection>
        <Title>Payment and Delivery</Title>
        <Paragraph>
          We work for you daily from Monday to Sunday. Ordering food from us you
          will no longer have to go to the shops, spend time preparing dishes,
          and you will also forget about a lot of dirty dishes. We will be happy
          to do it for you.
        </Paragraph>
        <Paragraph>
          Our products are delivered in disposable, recyclable plastic
          containers.
        </Paragraph>
        <Paragraph>
          Deliveries are made in the evening from 6 pm to 10 pm.
        </Paragraph>
        <Paragraph>
          You can pay for the order on our website using a bank card, PayPal or
          in cash to a courier.
        </Paragraph>
      </PaymentSection>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
