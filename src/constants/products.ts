import {
  TDish,
  TDishCount,
  TFoodCategoryCard,
  TLatestDish,
  TStatisticListItem,
} from "src/types";

import HomeFoodCategory1 from "src/assets/products/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/products/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/products/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/products/HomeFoodCategory4.png";

import HomeStatisticsIcon1 from "src/assets/products/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/products/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/products/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/products/HomeStatisticsIcon4.png";

import LatestDish from "src/assets/menu/LatestDish.png";

export const foodCategoryCards: TFoodCategoryCard[] = [
  {
    img: HomeFoodCategory1,
    buttonText: "See Healthy Food",
  },
  {
    img: HomeFoodCategory2,
    buttonText: "See Fast Food",
  },
  {
    img: HomeFoodCategory3,
    buttonText: "See Dessetrs",
  },
  {
    img: HomeFoodCategory4,
    buttonText: "See Drinks",
  },
];

export const statisticCards: TStatisticListItem[] = [
  {
    img: HomeStatisticsIcon1,
    alt: "chef's icon",
    content: "Professional Chefs",
    count: "30",
  },
  {
    img: HomeStatisticsIcon2,
    alt: "fast food",
    content: "Items Of Food",
    count: "320",
  },
  {
    img: HomeStatisticsIcon3,
    alt: "dishes",
    content: "Years Of Experienced",
    count: "30+",
  },
  {
    img: HomeStatisticsIcon4,
    alt: "pizza",
    content: "Happy Customers",
    count: "220",
  },
];

export const categoryTabs: string[] = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Fast Food",
  "Suops",
];

export const latestDishes: TLatestDish[] = [
  {
    img: LatestDish,
    title: "Pizza",
    price: 35,
    ref: "/",
  },
  {
    img: LatestDish,
    title: "CupCakes",
    price: 35,
    ref: "/",
  },
  {
    img: LatestDish,
    title: "Burger",
    price: 35,
    ref: "/",
  },
  {
    img: LatestDish,
    title: "Cookies",
    price: 35,
    ref: "/",
  },
];

export const productTags = [
  "Select All",
  "Burger",
  "Salad",
  "Pancakes",
  "Lemonade",
  "Muffin",
  "Pasta",
  "Suops",
];

export const foodCategories: string[] = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Soup",
  "Starter Menu",
  "Main Course",
  "Salad",
  "Vegetarian",
  "Fast Food",
];