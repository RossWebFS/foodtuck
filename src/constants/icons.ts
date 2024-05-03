import { TCategoryIcons, TIcon, TIcons } from "src/types";

import {
  BiLogoFacebook,
  BiLogoPinterestAlt,
  BiCommentDots,
} from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLike,
  AiOutlineUser,
} from "react-icons/ai";
import {
  PiHamburgerLight,
  PiCookieLight,
  PiWineLight,
  PiTote,
} from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import { BsYoutube, BsPinterest, BsCheck } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

export const icons: TIcons = {
  facebook: {
    icon: BiLogoFacebook,
    src: "https://facebook.com",
  },
  twitter: {
    icon: AiOutlineTwitter,
    src: "https://twitter.com",
  },
  pinterest: {
    icon: BiLogoPinterestAlt,
    src: "https://pinterest.com",
  },
  outlinedPinterest: {
    icon: BsPinterest,
    src: "https://pinterest.com",
  },
  instagram: {
    icon: AiOutlineInstagram,
    src: "https://instagram.com",
  },
  youtube: {
    icon: BsYoutube,
    src: "https://youtube.com",
  },
  search: { icon: RiSearchLine },
  user: { icon: AiOutlineUser },
  cart: { icon: PiTote },
  like: { icon: AiOutlineLike },
  comment: { icon: BiCommentDots },
  share: { icon: GoShareAndroid },
  check: { icon: BsCheck },
  burger: { icon: PiHamburgerLight },
  cookie: { icon: PiCookieLight },
  wine: { icon: PiWineLight },
};

export const footerIcons: TIcon[] = [
  icons.facebook,
  icons.twitter,
  icons.instagram,
  icons.youtube,
  icons.outlinedPinterest,
];

export const introSectionIcons: TIcon[] = [
  icons.facebook,
  icons.twitter,
  icons.pinterest,
];

export const foodCategoryIcons: TCategoryIcons[] = [
  {
    category: "Fast Food",
    icon: icons.burger.icon,
  },
  {
    category: "Lunch",
    icon: icons.cookie.icon,
  },
  {
    category: "Dinner",
    icon: icons.wine.icon,
  },
];

export const blogIconLinks: TIcon[] = [icons.like, icons.comment, icons.share];

export const singlePageLinks: TIcon[] = [
  icons.youtube,
  icons.facebook,
  icons.twitter,
  icons.instagram,
];
