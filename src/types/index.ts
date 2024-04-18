export interface TRoutes {
  routeName: string;
  path: string;
}

export interface TRecentPost {
  img: string;
  date: string;
  title: string;
  id: number;
}

export interface TFoodCategories {
  src: ImageData;
  alt: string;
  buttonText: string;
}

export interface TIcons {
  icon: React.ElementType;
  id: string;
}

export interface TStatisticListItem {
  img: any;
  alt: string;
  count: string;
  content: string;
}
