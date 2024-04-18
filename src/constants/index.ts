import {
  TRoutes,
  TRecentPost,
  TFoodCategories,
  TIcons,
  TStatisticListItem,
} from "src/types";
import { formDate } from "src/utils";

import RecentPost1 from "src/assets/RecentPost1.png";
import RecentPost2 from "src/assets/RecentPost2.png";
import RecentPost3 from "src/assets/RecentPost3.png";
import HomeFoodCategory1 from "src/assets/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/HomeFoodCategory4.png";
import HomeStatisticsIcon1 from "src/assets/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/HomeStatisticsIcon4.png";

import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { PiHamburgerLight, PiCookieLight, PiWineLight } from "react-icons/pi";

export const navRoutes: TRoutes[] = [
  {
    routeName: "Home",
    path: "/",
  },
  {
    routeName: "Menu",
    path: "/menu",
  },
  {
    routeName: "Blog",
    path: "/blog",
  },
  {
    routeName: "About",
    path: "/about",
  },
  {
    routeName: "Shop",
    path: "/shop",
  },
  {
    routeName: "Contacts",
    path: "/contacts",
  },
];

export const usefulLinkRoutes: TRoutes[] = [
  {
    routeName: "About",
    path: "/about",
  },
  {
    routeName: "News",
    path: "/news",
  },
  {
    routeName: "Partners",
    path: "/partners",
  },
  {
    routeName: "Team",
    path: "/team",
  },
  {
    routeName: "Menu",
    path: "/menu",
  },
  {
    routeName: "Contacts",
    path: "/contacts",
  },
];

export const helpRoutes: TRoutes[] = [
  {
    routeName: "FAQ",
    path: "/faq",
  },
  {
    routeName: "Term & conditions",
    path: "/term-and-conditions",
  },
  {
    routeName: "Reporting",
    path: "/reporting",
  },
  {
    routeName: "Documentation",
    path: "/documentation",
  },
  {
    routeName: "Support policy",
    path: "/support",
  },
  {
    routeName: "Privacy",
    path: "/privacy",
  },
];

export const recentPosts: TRecentPost[] = [
  {
    img: RecentPost1,
    date: formDate(),
    title: "Recent post 1",
    id: 1,
  },
  {
    img: RecentPost2,
    date: formDate(),
    title: "Recent post 2",
    id: 2,
  },
  {
    img: RecentPost3,
    date: formDate(),
    title: "Recent post 3",
    id: 3,
  },
];

export const foodCategories: TFoodCategories[] = [
  {
    src: HomeFoodCategory1,
    alt: "salads",
    buttonText: "See Healthy Food",
  },
  {
    src: HomeFoodCategory2,
    alt: "salads",
    buttonText: "See Fast Food",
  },
  {
    src: HomeFoodCategory3,
    alt: "salads",
    buttonText: "See Dessetrs",
  },
  {
    src: HomeFoodCategory4,
    alt: "salads",
    buttonText: "See Drinks",
  },
];

export const footerIcons: TIcons[] = [
  {
    icon: BiLogoFacebook,
    id: "facebook",
  },
  {
    icon: AiOutlineTwitter,
    id: "twitter",
  },
  {
    icon: AiOutlineInstagram,
    id: "outlinedInstragram",
  },
  {
    icon: BsYoutube,
    id: "youtube",
  },
  {
    icon: BsPinterest,
    id: "outlinedPinterest",
  },
];

export const introSectionIcons: TIcons[] = [
  {
    icon: BiLogoFacebook,
    id: "facebook",
  },
  {
    icon: AiOutlineTwitter,
    id: "twitter",
  },
  {
    icon: BiLogoPinterestAlt,
    id: "pinterest",
  },
];

export const foodCategoryIcons: {
  category: string;
  icon: React.ElementType;
}[] = [
  {
    category: "Fast Food",
    icon: PiHamburgerLight,
  },
  {
    category: "Lunch",
    icon: PiCookieLight,
  },
  {
    category: "Dinner",
    icon: PiWineLight,
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
