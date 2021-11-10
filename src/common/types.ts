export type DishType = {
  id: number;
  category: string;
  name: string;
  ingredients: string[];
  pict: string;
  dairyFree: boolean;
  beefFree: boolean;
  porkFree: boolean;
  calories: number;
  selected: boolean;
};

export type Category = {
  [key: string]: {
    color: string;
    count: number;
  };
};

export type SetType = {
  name: string;
  dishesId: number[];
  selected: boolean;
};

export type Order = {
  dishes: DishType[];
  user: User;
};

export type User = {
  [key: string]: {
    value: string;
    isValid?: boolean;
  };
};
