export type dishType = {
  id: number;
  category: string;
  name: string;
  ingredients: string[];
  pict: "assets/dishes/borscht.jpg";
  dairyFree: boolean;
  beefFree: boolean;
  porkFree: boolean;
  top: boolean;
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
  }[];
};

// export type userDataType = {
//    [key:string]: string
// }
