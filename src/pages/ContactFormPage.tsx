import React, { useState } from "react";
import styled from "styled-components/macro";
import Layout from "components/Layout";
import Input from "components/Input";
import { initialData } from "common/constants";
import RadioInput from "components/RadioInput";

const Form = styled.form`
  min-width: 300px;
`;

const ContactFormPage = () => {
  const [formData, setFormData] = useState(initialData);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const updateData = (fieldName: string) => (value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  return (
    <Layout title="Contact Details">
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
          value=""
          handleChange={updateData("date")}
        />
        <RadioInput
          name="payment"
          label="Cash"
          value="cash"
          checked={true}
          handleChange={updateData("payment")}
        />
        <RadioInput
          name="payment"
          label="PayPal"
          value="payPal"
          checked={false}
          handleChange={updateData("payment")}
        />
      </form>
    </Layout>
  );
};

export default ContactFormPage;
