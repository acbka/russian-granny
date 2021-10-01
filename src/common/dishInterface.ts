export interface dishInterface {
  id: number;
  category: string;
  name: string;
  ingredients: string[];
  pict: "assets/dishes/borscht.jpg";
  sets: number[];
  dairyFree: boolean;
  beefFree: boolean;
  porkFree: boolean;
  top: boolean;
  calories: number;
  selected: boolean;
}
