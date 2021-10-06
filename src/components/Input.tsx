import React, { ChangeEvent } from "react";
import styled from "styled-components/macro";

type InputPropsType = {
  type: string;
  name?: string;
  label: string;
  value: string;
  placeholder?: string;
  handleChange: (arg: string) => void;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
`;
const StyledInput = styled.input`
  min-width: 25rem;
  height: 2.5rem;
  padding-left: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  margin: 0.8rem 0 1.7rem;
  background: transparent;
  font-size: 1.25rem;
`;

const Input = ({
  label,
  type,
  value,
  name,
  placeholder,
  handleChange,
}: InputPropsType) => {
  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <label>{`${label}: `}</label>
      <StyledInput
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={inputData}
      />
    </Wrapper>
  );
};

export default Input;
