import { TRoute, TRoutes } from "src/types";

export const routes: TRoutes = {
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
    SHOP_DETAILS:{
      routeName: "Shop Details",
      path: "/shop-details",
    },
    CART: {
      routeName: "Cart",
      path: "/cart"
    }
};
  
export const usefulLinkRoutes: TRoute[] = [
  routes.ABOUT,
  routes.NEWS,
  routes.PARTNERS,
  routes.TEAM,
  routes.MENU,
  routes.CONTACTS,
];

export const helpRoutes: TRoute[] = [
  routes.FAQ,
  routes.TERM_AND_CONDITION,
  routes.REPORTING,
  routes.DOCUMENTATION,
  routes.SUPPORT_POLICY,
  routes.PRIVACY,
];  