// Routes
export interface TRoute {
  routeName: string;
  path: string;
}

export interface TRoutes {
  [key: string]: TRoute;
}

// Products
export interface TFoodCategories {
  img: string;
  alt: string;
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

// Posts
export interface TRecentPost {
  img: string;
  date: string;
  title: string;
  id?: number;
}

// Icons & Images
export interface TIcons {
  icon: React.ElementType;
  id: string;
  src: string;
}

export interface TImageInfo {
  info: string;
  img: string;
}

// Comments
export interface TComments {
  avatar: string;
  comment: string;
  userName: string;
}
