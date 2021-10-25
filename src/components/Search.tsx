import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components/macro";
import { DishType } from "common/types";
import SearchIcon from "./IconComponents/SearchIcon";

type SearchPropsType = {
  dishes: DishType[];
  setSearchDishes: (arg: DishType[]) => void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 170px;
  right: 150px;
  @media screen and (max-width: 850px) {
    position: relative;
    top:0;
    right: 0;
    justify-content: center;
    width: 100%;
  }
`;
const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  border-bottom: 2px solid var(--color-main);
  padding: 10px 0 0 0;
  margin-left: 10px;
  font-size: 1rem;
  @media screen and (max-width: 850px) {
    width: 60%;
  }
`;

const Search = ({ dishes, setSearchDishes }: SearchPropsType) => {
  const [value, setValue] = useState<string>("");
  const category = dishes[0].category;

  useEffect(() => {
    setValue("");
  }, [category]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchDish(e.target.value);
  };
  console.log(value);
  const searchDish = (value: string) => {
    const filteredDishes = dishes.filter(
      (dish) =>
        value.length === 0 ||
        dish.ingredients.filter((x) => x.includes(value.toLocaleLowerCase()))
          .length > 0 ||
        dish.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearchDishes(filteredDishes);
  };

  return (
    <Wrapper>
      <SearchIcon />
      <StyledInput type="text" value={value} onChange={handleChange} />
    </Wrapper>
  );
};

export default Search;
