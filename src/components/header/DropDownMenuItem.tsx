import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const LinkkWrap = styled.div`
  padding: 10px 20px;
`;
const StyledLink = styled(Link)`
  text-transform: capitalize;
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 500;
`;

type DropDownMenuItemPropsType = {
  category: string;
  setIsOpen: () => void;
};

const DropDownMenuItem = ({
  category,
  setIsOpen,
}: DropDownMenuItemPropsType) => {
  return (
    <LinkkWrap onClick={setIsOpen}>
      <StyledLink to={`/dishes/${category}`}>{category}</StyledLink>
    </LinkkWrap>
  );
};

export default DropDownMenuItem;
