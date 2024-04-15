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

export interface TUseSearchInput {
  searchValue: string;
  setSearchValue: (cur: string) => void;
}

export interface TUseSupportByEmail {
  emailValue: string;
  setEmailValue: (cur: string) => void;
}

export interface TFoodCategories {
  src: ImageData;
  alt: string;
  buttonText: string;
}
