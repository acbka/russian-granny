import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Layout from "components/Layout";
import Input from "components/Input";
import { initialUser } from "common/constants";
import RadioInput from "components/RadioInput";
import Button from "components/Button";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUserInOrder } from "api/slises/orderSlice";
import { selectOrder } from "api/selectors";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ButtonWrap = styled(Button)`
  margin: 25px 0;
  width: 220px;
`;
const Paragraph = styled.p`
  font-size: 0.9rem;
  color: #ff0000;
`;

const ContactFormPage = () => {
  const [user, setUser] = useState(initialUser);
  const [minDate, setminDate] = useState("");
  const [maxDate, setmaxDate] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const { pathname } = useLocation();
  const emailPattern =
    /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  const phonePattern = /02\d{7,8}/;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const updateUser = (fieldName: string) => (value: string) => {
    setUser({
      ...user,
      [fieldName]: { ...user[fieldName], value },
    });
  };

  useEffect(() => {
    const today = +new Date();
    const firstDate = new Date(today + 2 * 1000 * 60 * 60 * 24);
    const lastDate = new Date(today + 9 * 1000 * 60 * 60 * 24);
    setminDate(new Date(firstDate).toISOString().split("T")[0]);
    setmaxDate(new Date(lastDate).toISOString().split("T")[0]);
  }, []);

  const validateUser = () => {
    setUser({
      ...user,
      name: { ...user.name, isValid: user.name.value.length >= 3 },
      email: { ...user.email, isValid: emailPattern.test(user.email.value) },
      phone: {
        ...user.phone,
        isValid: phonePattern.test(user.phone.value.split("-").join("")),
      },
      date: {
        ...user.date,
        isValid: Boolean(user.date.value),
      },
    });
    if (
      user.name.value.length >= 3 &&
      emailPattern.test(user.email.value) &&
      phonePattern.test(user.phone.value.split("-").join("")) &&
      Boolean(user.date.value)
    ) {
      dispatch(setUserInOrder(user));
      history.push("./final");
    }
  };

  if (!order.dishes.length) history.push("/404");

  return (
    <Layout title="Contact Details">
      <Wrap>
        <form>
          <Input
            label="Full name"
            type="text"
            value={user.name.value}
            handleChange={updateUser("name")}
            isMust={true}
          />
          {!user.name.isValid && <Paragraph>Enter your name</Paragraph>}
          <Input
            label="Email"
            type="email"
            value={user.email.value}
            placeholder="you@example.com"
            handleChange={updateUser("email")}
            isMust={true}
          />
          {!user.email.isValid && (
            <Paragraph>Enter your valid email address</Paragraph>
          )}
          <Input
            label="Delivery Address"
            type="text"
            value={user.address.value}
            placeholder="1234 Main Street"
            handleChange={updateUser("address")}
          />
          <Input
            label="Suburb"
            type="text"
            value={user.suburb.value}
            placeholder="Suburb"
            handleChange={updateUser("suburb")}
          />
          <Input
            label="Phone"
            type="tel"
            value={user.phone.value}
            placeholder="___-___-____"
            handleChange={updateUser("phone")}
            isMust={true}
          />
          {!user.phone.isValid && (
            <Paragraph>Enter your phone number</Paragraph>
          )}
          <Input
            label="Delivery date"
            type="date"
            minDate={minDate}
            maxDate={maxDate}
            handleChange={updateUser("date")}
            isMust={true}
          />
          {!user.date.isValid && <Paragraph>Choose a date</Paragraph>}
          <RadioInput
            name="payment"
            label="Cash"
            value="cash"
            checked={user.payment.value === "cash"}
            handleChange={updateUser("payment")}
          />
          <RadioInput
            name="payment"
            label="PayPal"
            value="paypal"
            checked={user.payment.value === "paypal"}
            handleChange={updateUser("payment")}
          />
        </form>
        <ButtonWrap title="Continue to checkout" handleClick={validateUser} />
      </Wrap>
    </Layout>
  );
};

export default ContactFormPage;
