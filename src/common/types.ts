export type dishType = {
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

export type categoriesType = {
  [key: string]: {
    color: string;
    count: number;
  };
};

export type setType = {
  name: string;
  dishes: dishType[];
  selected: boolean;
};

export type order = {
  [key: string]: {
    dish: dishType;
    user: userType;
  }[];
};

export type userType = {
  [key: string]: {
    name: string;
    email: string;
    address: string;
    suburb: string;
    phone: string;
    date: string;
    payment: string;
  };
};
