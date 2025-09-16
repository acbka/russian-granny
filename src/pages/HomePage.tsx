import React from "react";
import styled from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "assets/background.jpeg";
import pelmeni from "assets/pelmeni.jpeg";
import food from "assets/food.jpeg";
import zakaz from "assets/zakaz.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "components/Button";

const Wrapper = styled.main`
  margin-top: 110px;
  font-size: 1.1rem;
`;

const MainSection = styled.section`
  padding: 100px 50px 20px 50px;
  background: center right url(${backgroundImage});
  @media screen and (max-width: 850px) {
    padding: 100px 20px 20px;
    background: bottom right url(${backgroundImage});
  }
`;

const MainTitle = styled.h1`
  color: var(--color-main);
  font-size: 3rem;
  text-align: center;
`;

const SubTitle = styled.h3`
  width: 60%;
  font-size: 1.8rem;
  text-align: left;
  margin: 3.125rem;
  line-height: 2.5rem;
  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 2rem;
    margin: 3.125rem 0;
  }
`;

const DiscountButton = styled(Button)`
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
  white-space: pre-line;
`;

const Section = styled.section`
  display: grid;
  align-items: center;
  grid-template-areas: "image title" "image text";
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 20px 100px;
  padding: 60px;
  @media screen and (max-width: 850px) {
    grid-template-areas: "title" "image" "text";
    grid-template-columns: 1fr;
    grid-gap: 50px 0;
  }
`;

const ImgWrap = styled.figure`
  grid-area: image;
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h2`
  grid-area: title;
  font-size: 2.5rem;
  text-align: center;
`;

const Info = styled.div`
  grid-area: text;
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
  @media screen and (max-width: 850px) {
    & > div {
      width: 100%;
    }
  }
`;

const InfoSection = styled(Section)`
  grid-template-areas: "title image" "text image";
  grid-template-columns: 1.5fr 1fr;
  @media screen and (max-width: 850px) {
    grid-template-areas: "title" "image" "text";
    grid-template-columns: 1fr;
    grid-gap: 50px 0;
  }
`;

const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 60px;
  & h2 {
    color: var(--color-main);
    margin-bottom: 30px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      <MainSection>
        <MainTitle>Authentic Homemade Russian Meals</MainTitle>
        <SubTitle>
          Enjoy the best homemade cooking - fresh, delicious, and delivered free
          in Auckland
        </SubTitle>
        <DiscountButton
          title={"$10 discount \n for the first order"}
          handleClick={() => navigate("dishes/mains")}
        ></DiscountButton>
      </MainSection>
      <Section>
        <ImgWrap>
          <img src={pelmeni} alt="pelmeni" />
        </ImgWrap>
        <Title>Relax! We’ll handle the cooking</Title>
        <Info>
          <Paragraph>
            Picture this: your Russian grandma visiting and filling your fridge
            with wholesome, homemade meals for the entire week. No more stress,
            no more standing over a hot stove — just heat, serve, and enjoy.
          </Paragraph>
          <Paragraph>
            We’ve been bringing delicious Russian food to Auckland since 2016.
            Our chefs know over a hundred traditional recipes, and our head chef
            personally makes sure every dish is fresh, high-quality, and full of
            flavour.
          </Paragraph>
        </Info>
      </Section>
      <Paralax>
        <Info>
          <Title>How should meals be stored, and for how long?</Title>
          <Paragraph>
            We deliver all dishes fresh. Thanks to our packaging and storage
            methods, meals stay tasty in your fridge for up to <b>7 days</b> .
          </Paragraph>
          <Paragraph>
            To keep them fresh, just follow a few simple rules:
          </Paragraph>
          <ul>
            <li>Always use clean, dry utensils</li>
            <li>Close containers tightly after use</li>
            <li>
              Store meals in the refrigerator at <b>+3°C</b> to <b> +5°C</b>
            </li>
            <li>Reheat only the portions you plan to eat</li>
          </ul>
        </Info>
      </Paralax>
      <InfoSection>
        <Title>Order information</Title>
        <Info>
          <Paragraph>
            For <b>$79.99</b> , you’ll receive{" "}
            <b>8 delicious homemade dishes </b> with a total weight of{" "}
            <b>8 kg</b> :
          </Paragraph>
          <li>
            <span>2 </span>
            <Link to="/dishes/soups">soups</Link> <span>1 litre each</span>{" "}
          </li>
          <li>
            <span>2 </span>
            <Link to="/dishes/soups">main</Link> <span>1 kg each</span>{" "}
          </li>
          <li>
            <span>2 </span>
            <Link to="/dishes/sides">side dishes</Link> <span>1 kg each</span>{" "}
          </li>
          <li>
            <span>1 </span>
            <Link to="/dishes/salads">salad</Link> <span>1 kg</span>{" "}
          </li>
          <li>
            <span>1 </span>
            <Link to="/dishes/desserts">dessert</Link> <span>1 kg</span>{" "}
          </li>
          <Paragraph>
            This meal set is enough to feed one person for 4–5 days.
          </Paragraph>
          <Paragraph>
            <span> To make it easier, we’ve also prepared ready-made </span>
            <Link to="/sets">dish sets</Link>{" "}
            <span>so you can choose without the hassle.</span>
          </Paragraph>
        </Info>
        <ImgWrap>
          <img src={food} alt="food" />
        </ImgWrap>
      </InfoSection>
      <PaymentSection>
        <Title>Payment & Delivery</Title>
        <Paragraph>
          We work for you <b>7 days a week, Monday to Sunday</b>. With us, you
          no longer need to go shopping, spend hours cooking, or wash piles of
          dirty dishes. We’ll happily take care of it for you.
        </Paragraph>
        <Paragraph>
          All meals are delivered in <b>disposable, recyclable containers</b>,
          keeping your food fresh and convenient.
        </Paragraph>
        <Paragraph>
          🚚 <b>Delivery time</b>: every evening from <b>6 pm to 10 pm</b>.
        </Paragraph>
        <Paragraph>
          💳 <b>Payment methods</b>: pay securely on our website with a bank
          card or PayPal, or simply pay cash to the courier at delivery.
        </Paragraph>
      </PaymentSection>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
