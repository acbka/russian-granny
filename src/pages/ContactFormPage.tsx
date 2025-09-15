import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInOrder } from "../api/slises/orderSlice";
import { selectOrder } from "../api/selectors";
import { initialUser } from "../common/constants";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PayPal from "../components/PayPal";
import PhoneInput from "../components/PhoneInput";
import RadioInput from "../components/RadioInput";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const { pathname } = useLocation();
  const emailPattern =
    /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const today = +new Date();
    const firstDate = new Date(today + 2 * 1000 * 60 * 60 * 24);
    const lastDate = new Date(today + 9 * 1000 * 60 * 60 * 24);
    setminDate(new Date(firstDate).toISOString().split("T")[0]);
    setmaxDate(new Date(lastDate).toISOString().split("T")[0]);
  }, []);

  const updateUser = (fieldName: string) => (value: string) => {
    setUser({
      ...user,
      [fieldName]: { ...user[fieldName], value: value.replace(/_/g, "") },
    });
  };

  const validateUser = () => {
    setUser({
      ...user,
      name: { ...user.name, isValid: user.name.value.length >= 3 },
      email: { ...user.email, isValid: emailPattern.test(user.email.value) },
      phone: {
        ...user.phone,
        isValid: user.phone.value.replace(/[^0-9]/g, "").length === 11,
      },
      date: {
        ...user.date,
        isValid: Boolean(user.date.value),
      },
    });
    if (
      user.name.value.length >= 3 &&
      emailPattern.test(user.email.value) &&
      (user.phone.value.replace(/[^0-9]/g, "").length === 10 ||
        user.phone.value.replace(/[^0-9]/g, "").length === 11) &&
      Boolean(user.date.value)
    ) {
      dispatch(setUserInOrder(user));
      navigate("./final");
    }
  };

  if (!order.dishes.length) navigate("/404");

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
          <PhoneInput
            label="Phone"
            value={user.phone.value}
            handleChange={updateUser("phone")}
            isMust={true}
          />
          {!user.phone.isValid && (
            <Paragraph>Phone number should consist 10-11 digits</Paragraph>
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
          {user.payment.value === "paypal" && <PayPal />}
        </form>
        <ButtonWrap title="Continue to checkout" handleClick={validateUser} />
      </Wrap>
    </Layout>
  );
};

export default ContactFormPage;
