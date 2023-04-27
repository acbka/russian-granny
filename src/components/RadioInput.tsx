import React, { ChangeEvent } from "react";
import styled from "styled-components/macro";

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

type RadioInputPropsType = {
  checked: boolean;
  label: string;
  name?: string;
  value: string;
  handleChange: (arg: string) => void;
};

const RadioInput = ({
  checked,
  label,
  name,
  value,
  handleChange,
}: RadioInputPropsType) => {
  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <StyledInput
        checked={checked}
        name={name}
        type="radio"
        value={value}
        onChange={inputData}
      />
      <StyledLabel>{`${label} `}</StyledLabel>
    </Wrapper>
  );
};

export default RadioInput;
