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
  setisMenuOpen: () => void;
};

const DropDownMenuItem = ({
  category,
  setisMenuOpen,
}: DropDownMenuItemPropsType) => {
  return (
    <LinkkWrap onClick={setisMenuOpen}>
      <StyledLink to={`/dishes/${category}`}>{category}</StyledLink>
    </LinkkWrap>
  );
};

export default DropDownMenuItem;
