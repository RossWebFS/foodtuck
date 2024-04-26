import { TRoute, TRoutes } from "src/types";

export const navRoutes: TRoutes = {
    HOME: {
      routeName: "Home",
      path: "/",
    },
    MENU: {
      routeName: "Menu",
      path: "/menu",
    },
    BLOG: {
      routeName: "Blog",
      path: "/blog",
    },
    ABOUT:{
      routeName: "About",
      path: "/about",
    },
    SHOP:{
      routeName: "Shop",
      path: "/shop",
    },
    CONTACTS:{
      routeName: "Contacts",
      path: "/contacts",
    },
    NEWS:{
      routeName: "News",
      path: "/news",
    },
    PARTNERS:{
      routeName: "Partners",
      path: "/partners",
    },
    TEAM:{
      routeName: "Team",
      path: "/team",
    },
    FAQ:{
      routeName: "FAQ",
      path: "/faq",
    },
    TERM_AND_CONDITION:{
      routeName: "Term & conditions",
      path: "/term-and-conditions",
    },
    REPORTING:{
      routeName: "Reporting",
      path: "/reporting",
    },
    DOCUMENTATION:{
      routeName: "Documentation",
      path: "/documentation",
    },
    SUPPORT_POLICY:{
      routeName: "Support policy",
      path: "/support",
    },
    PRIVACY:{
      routeName: "Privacy",
      path: "/privacy",
    },
};
  
export const usefulLinkRoutes: TRoute[] = [
  navRoutes.ABOUT,
  navRoutes.NEWS,
  navRoutes.PARTNERS,
  navRoutes.TEAM,
  navRoutes.MENU,
  navRoutes.CONTACTS,
];

export const helpRoutes: TRoute[] = [
  navRoutes.FAQ,
  navRoutes.TERM_AND_CONDITION,
  navRoutes.REPORTING,
  navRoutes.DOCUMENTATION,
  navRoutes.SUPPORT_POLICY,
  navRoutes.PRIVACY,
];  