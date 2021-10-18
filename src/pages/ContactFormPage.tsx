import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Layout from "components/Layout";
import Input from "components/Input";
import { initialUser } from "common/constants";
import RadioInput from "components/RadioInput";
import Button from "components/Button";
import { useHistory } from "react-router";

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

const ContactFormPage = () => {
  const [user, setuUer] = useState(initialUser);
  const [minDate, setminDate] = useState("");
  const [maxDate, setmaxDate] = useState("");
  const emailPattern =
    /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  const history = useHistory();
  const phonePattern = /02\d{7,8}/;

  const updateUser = (fieldName: string) => (value: string) => {
    setuUer({
      ...user,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    const today = +new Date();
    const firstDate = new Date(today + 2 * 1000 * 60 * 60 * 24);
    const lastDate = new Date(today + 9 * 1000 * 60 * 60 * 24);
    setminDate(new Date(firstDate).toISOString().split("T")[0]);
    setmaxDate(new Date(lastDate).toISOString().split("T")[0]);
  }, []);

  console.log({ user });

  const validateUser = () => {
    user.name.length >= 3 &&
      emailPattern.test(user.email) &&
      phonePattern.test(user.phone.split("-").join("")) &&
      Boolean(user.date);
    // history.push("./final");
  };

  return (
    <Layout title="Contact Details">
      <Wrap>
        <form>
          <Input
            label="Full name"
            type="text"
            value={user.name}
            handleChange={updateUser("name")}
          />
          <Input
            label="Email"
            type="email"
            value={user.email}
            placeholder="you@example.com"
            handleChange={updateUser("email")}
          />
          <Input
            label="Delivery Address"
            type="text"
            value={user.address}
            placeholder="1234 Main Street"
            handleChange={updateUser("address")}
          />
          <Input
            label="Suburb"
            type="text"
            value={user.suburb}
            placeholder="Suburb"
            handleChange={updateUser("suburb")}
          />
          <Input
            label="Phone"
            type="tel"
            value={user.phone}
            placeholder="___-___-___-____"
            handleChange={updateUser("phone")}
          />
          <Input
            label="Delivery date"
            type="date"
            minDate={minDate}
            maxDate={maxDate}
            handleChange={updateUser("date")}
          />
          <RadioInput
            name="payment"
            label="Cash"
            value="cash"
            checked={user.payment === "cash"}
            handleChange={updateUser("payment")}
          />
          <RadioInput
            name="payment"
            label="PayPal"
            value="paypal"
            checked={user.payment === "paypal"}
            handleChange={updateUser("payment")}
          />
        </form>
        <ButtonWrap
          title="Continue to checkout"
          handleClick={validateUser}
          disabled={
            !(
              user.name.length >= 3 &&
              emailPattern.test(user.email) &&
              phonePattern.test(user.phone) &&
              Boolean(user.date)
            )
          }
        />
      </Wrap>
    </Layout>
  );
};

export default ContactFormPage;
