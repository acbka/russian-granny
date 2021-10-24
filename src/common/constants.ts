import { Category, DishType, User } from "./types";

export const categories: Category = {
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

export const initialUser: User = {
  name: {
    value: "",
    isValid: true,
  },
  email: {
    value: "",
    isValid: true,
  },
  address: {
    value: "",
    isValid: true,
  },
  suburb: {
    value: "",
    isValid: true,
  },
  phone: {
    value: "",
    isValid: true,
  },
  date: {
    value: "",
    isValid: true,
  },
  payment: {
    value: "cash",
  },
};

export const emptyDish: DishType = {
  id: 0,
  name: "none",
  pict: "empty.png",
  category: "",
  calories: 0,
  dairyFree: false,
  beefFree: false,
  porkFree: false,
  selected: true,
  ingredients: [],
};
