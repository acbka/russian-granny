import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components/macro";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  margin-top: 1.5rem;
`;

export const CommonInput = css`
  min-width: 25rem;
  height: 2.5rem;
  padding-left: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  margin: 0.5rem 0;
  background: transparent;
  font-size: 1.25rem;
  @media screen and (max-width: 500px) {
    min-width: 18rem;
  }
`;

const StyledInput = styled.input`
  ${CommonInput}
`;

const Sup = styled.sup`
  color: #ff0000;
`;

type InputPropsType = {
  isMust?: boolean;
  label: string;
  maxDate?: string;
  minDate?: string;
  name?: string;
  placeholder?: string;
  type: string;
  value?: string;
  handleChange: (arg: string) => void;
};

const Input = ({
  isMust = false,
  label,
  maxDate,
  minDate,
  name,
  placeholder,
  type,
  value,
  handleChange,
}: InputPropsType) => {
  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <div>
        <label>{`${label}: `}</label>
        {isMust && <Sup>*</Sup>}
      </div>
      <StyledInput
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        min={minDate}
        max={maxDate}
        onChange={inputData}
      />
    </Wrapper>
  );
};

export default Input;
