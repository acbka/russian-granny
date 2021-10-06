import React, { ChangeEvent } from "react";
import styled from "styled-components/macro";

type RadioInputPropsType = {
  name?: string;
  label: string;
  value: string;
  checked: boolean;
  handleChange: (arg: string) => void;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StyledInput = styled.input`
  margin: 0.8rem 0;
`;
const StyledLabel = styled.label`
  font-size: 1.25rem;
  margin-left: 5px;
`;

const RadioInput = ({
  label,
  value,
  name,
  checked,
  handleChange,
}: RadioInputPropsType) => {
  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <StyledInput
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={inputData}
      />
      <StyledLabel>{`${label} `}</StyledLabel>
    </Wrapper>
  );
};

export default RadioInput;
