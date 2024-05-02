import { TFoodCategories, TLatestDish, TStatisticListItem } from "src/types";

import HomeFoodCategory1 from "src/assets/products/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/products/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/products/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/products/HomeFoodCategory4.png";

import HomeStatisticsIcon1 from "src/assets/products/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/products/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/products/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/products/HomeStatisticsIcon4.png";

import LatestDish from "src/assets/menu/LatestDish.png";

import { TDishes, TFoodDescription, TMenuDishInfo } from "src/types";

import BreakfastDish1 from "src/assets/products/BreakfastDish1.png";
import BreakfastDish2 from "src/assets/products/BreakfastDish2.png";

export const foodCategoryCards: TFoodCategories[] = [
  {
    img: HomeFoodCategory1,
    alt: "salads",
    buttonText: "See Healthy Food",
  },
  {
    img: HomeFoodCategory2,
    alt: "fast food",
    buttonText: "See Fast Food",
  },
  {
    img: HomeFoodCategory3,
    alt: "desserts",
    buttonText: "See Dessetrs",
  },
  {
    img: HomeFoodCategory4,
    alt: "drinks",
    buttonText: "See Drinks",
  },
];

export const statisticListItems: TStatisticListItem[] = [
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
  "Snack",
  "Soups",
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
  "Services",
  "Our Menu",
  "Pizza",
  "Cupcake",
  "Burger",
  "Cookies",
  "Our Shop",
  "Tandoori Chicken",
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

export const dishes1: TDishes[] = [
  {
    img: "https://nowcookthis.com/wp-content/uploads/2019/05/easy-homemade-lime-lemonade-thumbnail.jpg",
    title: "Fresh Lime",
    saledPrice: 38,
    basicPrice: 45,
    ref: "/",
  },
  {
    img: "https://sweetsbyelise.com/wp-content/uploads/2022/08/muffins.jpg",
    title: "Chocolate Muffin",
    saledPrice: null,
    basicPrice: 28,
    ref: "/",
  },
  {
    img: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
    title: "Fresh Lime",
    saledPrice: 21,
    basicPrice: 45,
    ref: "/",
  },
  {
    img: "https://penes.md/wp-content/uploads/2020/10/1-COUNTRY-BURGER.jpg",
    title: "Fresh Lime",
    saledPrice: null,
    basicPrice: 45,
    ref: "/",
  },
];

export const breakfastDishes: TFoodDescription[] = [
  {
    img: BreakfastDish1,
    title: "Lettuce Leaf",
    description: "njgfjbnfkjbfbjb hblhvblhvlhvdng;jdgn;djb",
    price: "12.5$",
  },
  {
    img: BreakfastDish2,
    title: "Fresh Breakfast",
    description: "njgfjbnfkhblhvlhhblhvjbfbjb dng;jdgn;djb",
    price: "14.5$",
  },
  {
    img: BreakfastDish1,
    title: "Lettuce Leaf",
    description: "njgfjbnfkjbfbjb hblhvblhvlhvdng;jdgn;djb",
    price: "12.5$",
  },
  {
    img: BreakfastDish2,
    title: "Fresh Breakfast",
    description: "njgfjbnfkhblhvlhhblhvjbfbjb dng;jdgn;djb",
    price: "14.5$",
  },
  {
    img: BreakfastDish1,
    title: "Lettuce Leaf",
    description: "njgfjbnfkjbfbjb hblhvblhvlhvdng;jdgn;djb",
    price: "12.5$",
  },
  {
    img: BreakfastDish2,
    title: "Fresh Breakfast",
    description: "njgfjbnfkhblhvlhhblhvjbfbjb dng;jdgn;djb",
    price: "14.5$",
  },
  {
    img: BreakfastDish1,
    title: "Lettuce Leaf",
    description: "njgfjbnfkjbfbjb hblhvblhvlhvdng;jdgn;djb",
    price: "12.5$",
  },
  {
    img: BreakfastDish2,
    title: "Fresh Breakfast",
    description: "njgfjbnfkhblhvlhhblhvjbfbjb dng;jdgn;djb",
    price: "14.5$",
  },
];

// Products data

interface TDish {
  img: string;
  calories: number;
  category: string[];
  tags: string[];
  rating: number; // from 0 to 5
  receipe: string[];
  description: string;
  title: string;
  price: number;
}

export const dishes: TDish[] = [
  {
    img: "https://nowcookthis.com/wp-content/uploads/2019/05/easy-homemade-lime-lemonade-thumbnail.jpg",
    title: "Lime Lemonade",
    calories: 150,
    category: ["drink", "vegeterian"],
    tags: ["lemonade"],
    rating: 4,
    price: 5.99,
    receipe: ["Lemon juice", "Lime juice", "Sugar", "Water"],
    description: `Over at my gram’s house, summer meant limeade – 
    which sounded totally weird to me at the time – but once I tried it, 
    I was in love! I think it came from the freezer section (it even had pulp in it). 
    It tasted so fresh and delicious. Let’s not forget the true meaning of the holiday. 
    Please take a moment to remember and honor all the courageous souls who died while 
    serving this country and made the ultimate sacrifice to protect our freedoms – and 
    also to thank and honor all the brave men and women who are serving today.`,
  },
  {
    img: "https://sweetsbyelise.com/wp-content/uploads/2022/08/muffins.jpg",
    title: "Chocolate Muffin",
    calories: 320,
    category: ["dessert"],
    tags: ["muffin"],
    rating: 5,
    price: 6.55,
    receipe: ["Chocolate", "Milk", "Sugar", "Eggs", "Flour"],
    description: `These double chocolate muffins have been our favorite chocolate 
    muffin recipe for over a decade. I love them so much that I published the easy 
    recipe in my 1st cookbook back in 2014! (We now add even more chocolate chips 
    and a touch of vanilla for extra flavor, as you’ll see in the recipe below.) 
    The muffins are incredibly rich, mega chocolate-y, and loaded with chocolate chips 
    in every single bite. Sour cream helps guarantee a soft and moist muffin that has 
    a denser texture than chocolate cupcakes.`,
  },
  {
    img: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
    title: "Cheeseburger",
    calories: 540,
    category: ["fast food", "starter menu"],
    tags: ["burger"],
    rating: 5,
    price: 10.99,
    receipe: ["Cheese", "Buns", "Beef", "Tomatoes", "Salad"],
    description: `A cheeseburger may have more than one patty or more than one 
    slice of cheese—it is reasonably common, but by no means automatic, for the 
    number to increase at the same rate with cheese and meat interleaved. A stack 
    of two or more patties follows the same basic pattern as hamburgers: with two 
    patties will be called a double cheeseburger; a triple cheeseburger has three, 
    and while much less common, a quadruple has four.`,
  },
  {
    img: "https://nowcookthis.com/wp-content/uploads/2019/05/easy-homemade-lime-lemonade-thumbnail.jpg",
    title: "Lime Lemonade",
    calories: 150,
    category: ["drink", "vegeterian"],
    tags: ["lemonade"],
    rating: 4,
    price: 5.99,
    receipe: ["Lemon juice", "Lime juice", "Sugar", "Water"],
    description: `Over at my gram’s house, summer meant limeade – 
    which sounded totally weird to me at the time – but once I tried it, 
    I was in love! I think it came from the freezer section (it even had pulp in it). 
    It tasted so fresh and delicious. Let’s not forget the true meaning of the holiday. 
    Please take a moment to remember and honor all the courageous souls who died while 
    serving this country and made the ultimate sacrifice to protect our freedoms – and 
    also to thank and honor all the brave men and women who are serving today.`,
  },
  {
    img: "https://sweetsbyelise.com/wp-content/uploads/2022/08/muffins.jpg",
    title: "Chocolate Muffin",
    calories: 320,
    category: ["dessert"],
    tags: ["muffin"],
    rating: 5,
    price: 6.55,
    receipe: ["Chocolate", "Milk", "Sugar", "Eggs", "Flour"],
    description: `These double chocolate muffins have been our favorite chocolate 
    muffin recipe for over a decade. I love them so much that I published the easy 
    recipe in my 1st cookbook back in 2014! (We now add even more chocolate chips 
    and a touch of vanilla for extra flavor, as you’ll see in the recipe below.) 
    The muffins are incredibly rich, mega chocolate-y, and loaded with chocolate chips 
    in every single bite. Sour cream helps guarantee a soft and moist muffin that has 
    a denser texture than chocolate cupcakes.`,
  },
  {
    img: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
    title: "Cheeseburger",
    calories: 540,
    category: ["fast food", "starter menu"],
    tags: ["burger"],
    rating: 5,
    price: 10.99,
    receipe: ["Cheese", "Buns", "Beef", "Tomatoes", "Salad"],
    description: `A cheeseburger may have more than one patty or more than one 
    slice of cheese—it is reasonably common, but by no means automatic, for the 
    number to increase at the same rate with cheese and meat interleaved. A stack 
    of two or more patties follows the same basic pattern as hamburgers: with two 
    patties will be called a double cheeseburger; a triple cheeseburger has three, 
    and while much less common, a quadruple has four.`,
  },
];
