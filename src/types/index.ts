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
  _id: string;
}

export interface TDishCount extends TDish {
  count: number;
  // id: string;
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
  categories: string[];
  price: number[];
  tag: string;
}

// Posts

export interface TBlog {
  title: string;
  date: string;
  description: string;
  _id: string;
  img: string[];
  comments: string[];
  tags: string[];
  text: string;
}

// Icons & Images
export interface TIcon {
  icon: React.ElementType;
  src?: string;
}

export interface TIcons {
  [key: string]: TIcon;
}

export interface TTeamMember1 {
  name: string;
  img: string;
  status: string;
}
export interface TTeamMember {
  name: string;
  avatar: string;
  status: string;
}

export interface TCategoryIcons {
  category: string;
  icon: React.ElementType;
}

// Comments
export interface TComment {
  id: string;
  userId: string;
  content: string;
  date: string;
  postId: string;
}

export interface TData {
  tags: string[];
  title: string;
  img: string;
  _id: string;
  baseUrl: string;
}

export interface TUser {
  avatar: string;
  name: string;
  email: string;
  password: string;
  id: string;
}

export interface TPayload {
  id: string;
  iat: number;
  exp: number;
}
