import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Layout from "components/Layout";
import Input from "components/Input";
import { initialData } from "common/constants";
import RadioInput from "components/RadioInput";
import Button from "components/Button";
import { useHistory } from "react-router";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactFormPage = () => {
  const [userData, setUserData] = useState(initialData);
  const [minDate, setminDate] = useState("");
  const [maxDate, setmaxDate] = useState("");
  const emailTemplate =
    /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  const history = useHistory();

  const updateData = (fieldName: string) => (value: string) => {
    setUserData({
      ...userData,
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

  console.log({ userData });

  return (
    <Layout title="Contact Details">
      <Wrap>
        <form>
          <Input
            label="Full name"
            type="text"
            value=""
            handleChange={updateData("name")}
          />
          <Input
            label="Email"
            type="email"
            value=""
            placeholder="you@example.com"
            handleChange={updateData("email")}
          />
          <Input
            label="Delivery Address"
            type="text"
            value=""
            placeholder="1234 Main Street"
            handleChange={updateData("address")}
          />
          <Input
            label="Suburb"
            type="text"
            value=""
            placeholder="Suburb"
            handleChange={updateData("suburb")}
          />
          <Input
            label="Phone"
            type="phone"
            value=""
            placeholder=""
            handleChange={updateData("phone")}
          />
          <Input
            label="Delivery date"
            type="date"
            minDate={minDate}
            maxDate={maxDate}
            handleChange={updateData("date")}
          />
          <RadioInput
            name="payment"
            label="Cash"
            value="cash"
            checked={userData.payment === "cash"}
            handleChange={updateData("payment")}
          />
          <RadioInput
            name="payment"
            label="PayPal"
            value="paypal"
            checked={userData.payment === "paypal"}
            handleChange={updateData("payment")}
          />
        </form>
        <Button
          title="continue to checkout"
          handleClick={() => history.push("./final")}
        />
      </Wrap>
    </Layout>
  );
};

export default ContactFormPage;
