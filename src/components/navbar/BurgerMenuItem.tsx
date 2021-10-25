import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type BurgerMenuItemPropsType = {
  category: string;
};

const LinkWrap = styled.div`
  padding: 10px 20px;
`;
const StyledLink = styled(Link)`
  text-transform: capitalize;
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 500;
`;

const BurgerMenuItem = ({
  category,
}: BurgerMenuItemPropsType) => {
  return (
    <LinkWrap>
      <StyledLink to={`/dishes/${category}`}>{category}</StyledLink>
    </LinkWrap>
  );
};

export default BurgerMenuItem;
