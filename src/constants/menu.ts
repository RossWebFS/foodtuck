import { TMenuDishInfo } from "src/types";

import ShopCard from "src/assets/menu/ShopCard.png";
import ShopCard2 from "src/assets/menu/ShopCard2.png";
import ShopCard3 from "src/assets/menu/ShopCard3.png";
import ShopCard4 from "src/assets/menu/ShopCard4.png";

export const starterMenu: TMenuDishInfo[] = [
  {
    title: "Alder Grilled Chinook Salmon",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Alder Grilled Chinook Salmon",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Alder Grilled Chinook Salmon",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Alder Grilled Chinook Salmon",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
];

export const mainMenu: TMenuDishInfo[] = [
  {
    title: "Vegetables & Green Salad",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Vegetables & Green Salad",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Vegetables & Green Salad",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    title: "Vegetables & Green Salad",
    ref: "/",
    ingredients: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
];

interface TDishes {
  img: string;
  title: string;
  saledPrice: number | null;
  basicPrice: number;
  ref: string;
}

export const dishes: TDishes[] = [
  {
    img: ShopCard,
    title: "Fresh Lime",
    saledPrice: 38,
    basicPrice: 45,
    ref: "/",
  },
  {
    img: ShopCard2,
    title: "Fresh Lime",
    saledPrice: null,
    basicPrice: 28,
    ref: "/",
  },
  {
    img: ShopCard3,
    title: "Fresh Lime",
    saledPrice: 21,
    basicPrice: 45,
    ref: "/",
  },
  {
    img: ShopCard4,
    title: "Fresh Lime",
    saledPrice: null,
    basicPrice: 45,
    ref: "/",
  },
];

export const foodCategories: string[] = [
  "Sandwiches",
  "Burgers",
  "Chicken Chups",
  "Drinks",
  "Pizza",
  "Thi",
  "Non Veg",
  "Uncategorized",
];
