import React, { ChangeEvent } from "react";
import styled from "styled-components/macro";
import InputMask from "react-input-mask";
import { CommonInput } from "components/Input";

type InputPropsType = {
  label: string;
  value: string;
  isMust?: boolean;
  handleChange: (arg: string) => void;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  margin-top: 1.5rem;
`;
const StyledPhoneInput = styled(InputMask)`
  ${CommonInput}
`;
const Sup = styled.sup`
  color: #ff0000;
`;

const PhoneInput = ({
  label,
  value,
  isMust = false,
  handleChange,
}: InputPropsType) => {
  const inputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <div>
        <label>{`${label}: `}</label>
        {isMust && <Sup>*</Sup>}
      </div>
      <StyledPhoneInput
        mask="(+64) 99 99 99 999"
        value={value}
        onChange={inputPhone}
      ></StyledPhoneInput>
    </Wrapper>
  );
};

export default PhoneInput;
