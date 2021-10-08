export type categoriesType = {
  [key: string]: {
    color: string;
    count: number;
  };
};

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
    color: "#b3f9b3",
    count: 2,
  },
  salads: {
    color: "#ffc0cb",
    count: 1,
  },
  desserts: {
    color: "#a0e8f7",
    count: 1,
  },
};

// export type formDataType = {
//    [key:string]: string
// }

const date = new Date().toISOString().split("T")[0]

export const initialData = {
  name: "",
  email: "",
  address: "",
  suburb: "",
  phone: "",
  date: date,
  payment: "cash"
};
