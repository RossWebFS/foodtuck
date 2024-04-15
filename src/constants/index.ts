import { TRoutes, TRecentPost, TFoodCategories } from "src/types";
import { formDate } from "src/utils";

import RecentPost1 from "src/assets/RecentPost1.png";
import RecentPost2 from "src/assets/RecentPost2.png";
import RecentPost3 from "src/assets/RecentPost3.png";
import HomeFoodCategory1 from "src/assets/HomeFoodCategory1.png";
import HomeFoodCategory2 from "src/assets/HomeFoodCategory2.png";
import HomeFoodCategory3 from "src/assets/HomeFoodCategory3.png";
import HomeFoodCategory4 from "src/assets/HomeFoodCategory4.png";

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
