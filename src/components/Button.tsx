import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  height: 42px;
  text-align: center;
  font-family: inherit;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  background: var(--color-main);
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  &:disabled {
    color: #000;
    background: var(--color-grey);
    &:hover {
      color: #000;
      background: var(--color-grey);
    }
  }
  &:hover {
    color: #fff;
    background: var(--color-second);
  }
`;

type ButtonPropsType = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  title?: string;
  handleClick: () => void;
};

const Button = ({
  children,
  className,
  disabled,
  title,
  handleClick,
}: ButtonPropsType) => {
  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {title || children}
    </StyledButton>
  );
};

export default Button;
