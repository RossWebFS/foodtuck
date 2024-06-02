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
  BLOG_DETAILS: {
    routeName: "Blog Details",
    path: "/blog-details",
  },
  ABOUT: {
    routeName: "About",
    path: "/about",
  },
  SHOP: {
    routeName: "Shop",
    path: "/shop",
  },
  CONTACTS: {
    routeName: "Contacts",
    path: "/contacts",
  },
  NEWS: {
    routeName: "News",
    path: "/news",
  },
  PARTNERS: {
    routeName: "Partners",
    path: "/partners",
  },
  CHEFS: {
    routeName: "Chefs",
    path: "/chefs",
  },
  FAQ: {
    routeName: "FAQ",
    path: "/faq",
  },
  TERM_AND_CONDITION: {
    routeName: "Term & conditions",
    path: "/term-and-conditions",
  },
  REPORTING: {
    routeName: "Reporting",
    path: "/reporting",
  },
  DOCUMENTATION: {
    routeName: "Documentation",
    path: "/documentation",
  },
  SUPPORT_POLICY: {
    routeName: "Support policy",
    path: "/support",
  },
  PRIVACY: {
    routeName: "Privacy",
    path: "/privacy",
  },
  SHOP_DETAILS: {
    routeName: "Shop Details",
    path: "/shop-details",
  },
  CART: {
    routeName: "Cart",
    path: "/cart",
  },
  SIGN_UP: {
    routeName: "Sign Up",
    path: "/sign-up",
  },
  SIGN_IN: {
    routeName: "Sign In",
    path: "/sign-in",
  },
  CHECKOUT: {
    routeName: "Checkout",
    path: "/checkout",
  },
  PROFILE: {
    routeName: "Profile",
    path: "/profile",
  },
  ERROR: {
    routeName: "404",
    path: "*",
  },
};

export const pages: TRoute[] = [
  routes.HOME,
  routes.MENU,
  routes.BLOG,
  routes.ABOUT,
  routes.SHOP,
  routes.SHOP_DETAILS,
  routes.CART,
  routes.SIGN_UP,
  routes.SIGN_IN,
  routes.CHECKOUT,
  routes.PROFILE,
  routes.ERROR,
  routes.CHEFS,
  routes.FAQ,
];

export const usefulLinks: TRoute[] = [
  routes.ABOUT,
  routes.NEWS,
  routes.PARTNERS,
  routes.CHEFS,
  routes.MENU,
  routes.CONTACTS,
];

export const helpLinks: TRoute[] = [
  routes.FAQ,
  routes.TERM_AND_CONDITION,
  routes.REPORTING,
  routes.DOCUMENTATION,
  routes.SUPPORT_POLICY,
  routes.PRIVACY,
];
