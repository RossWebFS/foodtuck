export interface TRoutes {
  routeName: string;
  path: string;
}

export interface TRecentPost {
  img: string;
  date: string;
  title: string;
  id?: number;
}

export interface TFoodCategories {
  img: string;
  alt: string;
  buttonText: string;
}

export interface TIcons {
  icon: React.ElementType;
  id: string;
  src: string;
}

export interface TStatisticListItem {
  img: string;
  alt: string;
  count: string;
  content: string;
}

export interface TImageInfo {
  info: string;
  img: string;
}

export interface TComments {
  avatar: string;
  comment: string;
  userName: string;
}

export interface TFoodDescription {
  img: string;
  title: string;
  description: string;
  price: string;
}
