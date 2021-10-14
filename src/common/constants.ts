import { categoriesType, dishType } from "./types";

export const categories: categoriesType = {
  soups: {
    color: "#c9a8f7",
    count: 2,
  },
  mains: {
    color: "#f7f3ad",
    count: 2,
  },
  sides: {
    color: "#ffc0cb",
    count: 2,
  },
  salads: {
    color: "#b3f9b3",
    count: 1,
  },
  desserts: {
    color: "#ffa500",
    count: 1,
  },
};

export const initialData = {
  name: "",
  email: "",
  address: "",
  suburb: "",
  phone: "",
  date: "",
  payment: "cash",
};

export const emptyDish: dishType = {
  id: 0,
  name: "none",
  pict: "granny.png",
  category: "",
  calories: 0,
  dairyFree: false,
  beefFree: false,
  porkFree: false,
  selected: true,
  ingredients: [],
};
