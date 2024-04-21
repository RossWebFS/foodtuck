import { TFoodCategories, TStatisticListItem } from "src/types";

import HomeFoodCategory1 from "src/assets/products/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/products/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/products/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/products/HomeFoodCategory4.png";
import HomeStatisticsIcon1 from "src/assets/products/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/products/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/products/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/products/HomeStatisticsIcon4.png";

export const foodCategories: TFoodCategories[] = [
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