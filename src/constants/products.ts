import { TDish, TDishCount, TFoodCategoryCard, TLatestDish, TStatisticListItem } from "src/types";

import HomeFoodCategory1 from "src/assets/products/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/products/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/products/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/products/HomeFoodCategory4.png";

import HomeStatisticsIcon1 from "src/assets/products/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/products/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/products/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/products/HomeStatisticsIcon4.png";

import LatestDish from "src/assets/menu/LatestDish.png";

import { TMenuDishInfo } from "src/types";


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
  "Fast food",
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
  "Select All",
  "Burger",
  "Salad",
  "Pancakes",
  "Lemonade",
  "Muffin",
  "Pasta",
  "Soup",
];

export const foodCategories: string[] = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Soup",
  "Starter menu",
  "Main course",
  "Salad",
  "Vegetarian",
  "Fast food"
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

// Products data

export const dishes: TDishCount[] = [
  {
    img: "https://nowcookthis.com/wp-content/uploads/2019/05/easy-homemade-lime-lemonade-thumbnail.jpg",
    title: "Lime Lemonade",
    calories: 150,
    category: ["Drink", "Vegetarian"],
    tags: ["Lemonade"],
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
    count: 0
  },
  {
    img: "https://sweetsbyelise.com/wp-content/uploads/2022/08/muffins.jpg",
    title: "Chocolate Muffin",
    calories: 320,
    category: ["Dessert"],
    tags: ["Muffin"],
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
    count: 0
  },
  {
    img: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
    title: "Cheeseburger",
    calories: 540,
    category: ["Fast food", "Starter menu"],
    tags: ["Burger"],
    rating: 5,
    price: 10.99,
    receipe: ["Cheese", "Buns", "Beef", "Tomatoes", "Salad"],
    description: `A cheeseburger may have more than one patty or more than one 
    slice of cheese—it is reasonably common, but by no means automatic, for the 
    number to increase at the same rate with cheese and meat interleaved. A stack 
    of two or more patties follows the same basic pattern as hamburgers: with two 
    patties will be called a double cheeseburger; a triple cheeseburger has three, 
    and while much less common, a quadruple has four.`,
    count: 0
  },
  {
    img: "https://assets.epicurious.com/photos/61f7fdd2913eaa0e66bd989a/1:1/w_3966,h_3966,c_limit/SourCreamPancakes_RECIPE_012622_26344%20(1).jpg",
    title: "Pancakes",
    calories: 600,
    category: ["Dessert", "Breakfast"],
    tags: ["Pancakes"],
    rating: 5,
    price: 12.00,
    receipe: ["Milk", "Eggs", "Flour", "Honey"],
    description: `Every single Sunday begins with pancakes… and ends with leftover 
    pancakes from the morning. These are everything you want in a pancake. They’re 
    soft and so fluffy… each mouthful melts in your mouth… you’ll be reaching for 
    more than one. Stack. Possibly.`,
    count: 0
  },
  {
    img: "https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953",
    title: "Beef Steak",
    calories: 900,
    category: ["Lunch", "Main course"],
    tags: ["Steak"],
    rating: 5,
    price: 25.99,
    receipe: ["Milk", "Eggs", "Flour", "Honey"],
    description: `Every single Sunday begins with pancakes… and ends with leftover 
    pancakes from the morning. These are everything you want in a pancake. They’re 
    soft and so fluffy… each mouthful melts in your mouth… you’ll be reaching for 
    more than one. Stack. Possibly.`,
    count: 0
  },
  {
    img: "https://assets.tmecosys.cn/image/upload/t_web767x639/img/recipe/ras/Assets/36C4D0A8-A26C-438B-9871-27ABEABB2E66/Derivates/A94C5717-A483-4ADF-B8AE-6D170994FEA1.jpg",
    title: "Carborara",
    calories: 750,
    category: ["Dinner", "Vegetarian", "Main course"],
    tags: ["Pasta"],
    rating: 5,
    price: 14.70,
    receipe: ["Pasta", "Mozzarella", "Tomatoes"],
    description: `Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid, cylindrical 
    pasta. It is a staple food of traditional Italian cuisine. Like other pasta, 
    spaghetti is made of milled wheat, water, and sometimes enriched with vitamins 
    and minerals. Italian spaghetti is typically made from durum-wheat semolina.`,
    count: 0
  },
  {
    img: "https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg",
    title: "Chicken Soup",
    calories: 300,
    category: ["Soup", "Lunch"],
    tags: ["Soup"],
    rating: 2,
    price: 9.99,
    receipe: ["Chiken", "Potatoes", "Carrot", "Pasta"],
    description: `A simple vegetable soup like this is my absolute favorite. It’s 
    nourishing, comforting, fresh, and light, yet filling enough to be a full 
    vegetarian meal. But truth be told, I was never a fan of vegetable soup 
    until I started making it myself at home, with this recipe. Because other 
    versions I had tried were always been a bit bland and boring.`,
    count: 0
  },
  {
    img: "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg",
    title: "Greek Salad",
    calories: 200,
    category: ["Salad", "Vegetarian", "Lunch"],
    tags: ["Salad"],
    rating: 3,
    price: 12.30,
    receipe: ["Cucumber", "Salad", "Mozzarrela", "Tomatoes"],
    description: `I’m a huge fan of making your own dressings; especially since 
    store-bought salad dressings can be pretty pricey. You don’t even have to 
    use a bowl and a whisk! My favorite way is to add the ingredients to a 
    mason jar or other jar with a tight fitting lid, and give it a good shaking.`,
    count: 0
  },
];
