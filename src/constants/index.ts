import { TRoutes, TRecentPost } from "src/types";

import RecentPost1 from "src/assets/RecentPost1.png";
import RecentPost2 from "src/assets/RecentPost2.png";
import RecentPost3 from "src/assets/RecentPost3.png";

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
    date: `${new Date().getDate()} ${new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date())} ${new Date().getFullYear()}`,
    title: "Recent post 1",
    id: 1,
  },
  {
    img: RecentPost2,
    date: `${new Date().getDate()} ${new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date())} ${new Date().getFullYear()}`,
    title: "Recent post 2",
    id: 2,
  },
  {
    img: RecentPost3,
    date: `${new Date().getDate()} ${new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date())} ${new Date().getFullYear()}`,
    title: "Recent post 3",
    id: 3,
  },
];

// export const navRoutes = [
//   {
//     routeName: "Home",
//     path: "/",
//   },
//   {
//     routeName: "Menu",
//     path: "/menu",
//   },
//   {
//     routeName: "Blog",
//     path: "/blog",
//   },
//   {
//     routeName: "About",
//     path: "/about",
//   },
//   {
//     routeName: "Shop",
//     path: "/shop",
//   },
//   {
//     routeName: "Contacts",
//     path: "/contacts",
//   },
// ] as const;
