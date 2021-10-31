import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type DropDownMenuItemPropsType = {
  category: string;
  setIsMenuOpen: () => void;
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
