export type Dish = {
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

export type Set = {
  name: string;
  dishes: Dish[];
  selected: boolean;
};

export type Order = {
  dishes: Dish[];
  user: User;
};

export type User = {
  [key: string]: {
    value: string;
    isValid?: boolean;
  };
};
