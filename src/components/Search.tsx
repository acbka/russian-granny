import { DishType } from "common/types";
import React, { useState, ChangeEvent } from "react";

type SearchPropsType = {
  dishes: DishType[];
};

const Search = ({ dishes }: SearchPropsType) => {
  const [value, setValue] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchDish(e.target.value);
  };

  const searchDish = (value: string) => {
    dishes.filter(
      (dish) =>
        value.length === 0 ||
        dish.ingredients.filter((x) => x.includes(value.toLocaleLowerCase()))
          .length > 0 ||
        dish.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  };

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default Search;
