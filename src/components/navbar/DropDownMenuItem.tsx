import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const LinkWrap = styled.div`
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
  setIsMenuOpen: () => void;
};

const DropDownMenuItem = ({
  category,
  setIsMenuOpen,
}: DropDownMenuItemPropsType) => {
  return (
    <LinkWrap onClick={setIsMenuOpen}>
      <StyledLink to={`/dishes/${category}`}>{category}</StyledLink>
    </LinkWrap>
  );
};

export default DropDownMenuItem;
