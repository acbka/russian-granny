export type setType = {
  name: string;
  dishes: {
    [category: string]: number[];
  };
  selected: boolean;
};
