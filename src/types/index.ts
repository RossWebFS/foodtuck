// Routes
export interface TRoute {
  routeName: string;
  path: string;
}

export interface TRoutes {
  [key: string]: TRoute;
}

// Products
export interface TDish {
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

export interface TDishCount extends TDish {
  count: number;
}

export interface TFoodCategoryCard {
  img: React.ReactNode;
  buttonText: string;
}

export interface TFoodDescription {
  img: string;
  title: string;
  description: string;
  price: string;
}

export interface TMenuDishInfo {
  title: string;
  ref: string;
  ingredients: string;
  calories: number;
  price: number;
}

export interface TStatisticListItem {
  img: string;
  alt: string;
  count: string;
  content: string;
}

export interface TDishes {
  img: string;
  title: string;
  saledPrice: number | null;
  basicPrice: number;
  ref: string;
}

export interface TLatestDish {
  img: string;
  title: string;
  price: number;
  ref: string;
}

export interface TFilterObject {
  preferred: ("cart" | "wishList")[];
  calories: ("low" | "middle" | "high")[];
  search: string;
  // category: (
  //   | "Breakfast"
  //   | "Lunch"
  //   | "Dinner"
  //   | "Dessert"
  //   | "Drink"
  //   | "Suops"
  //   | "Starter Menu"
  //   | "Main Course"
  //   | "Salad"
  //   | "Vegetarian"
  //   | "Fast food"
  // )[];
  categories: string[];
  price: number[];
  tag: string;
  pagination: number;
}

// Posts
export interface TRecentPost {
  img: string;
  date: string;
  title: string;
  id?: number;
}

// Icons & Images
export interface TIcon {
  icon: React.ElementType;
  src?: string;
}

export interface TIcons {
  [key: string]: TIcon;
}

export interface TTeamMember {
  name: string;
  img: string;
  status: string;
}

export interface TCategoryIcons {
  category: string;
  icon: React.ElementType;
}

// Comments
export interface TComments {
  avatar: string;
  comment: string;
  userName: string;
}
