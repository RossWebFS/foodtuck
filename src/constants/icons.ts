import { TIcons } from "src/types";

import {
  BiLogoFacebook,
  BiLogoPinterestAlt,
  BiCommentDots,
} from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLike,
} from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { PiHamburgerLight, PiCookieLight, PiWineLight } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";

export const footerIcons: TIcons[] = [
  {
    icon: BiLogoFacebook,
    id: "facebook",
    src: "https://facebook.com",
  },
  {
    icon: AiOutlineTwitter,
    id: "twitter",
    src: "https://twitter.com",
  },
  {
    icon: AiOutlineInstagram,
    id: "outlinedInstragram",
    src: "https://instagram.com",
  },
  {
    icon: BsYoutube,
    id: "youtube",
    src: "https://youtube.com",
  },
  {
    icon: BsPinterest,
    id: "outlinedPinterest",
    src: "https://pinterest.com",
  },
];

export const introSectionIcons: TIcons[] = [
  {
    icon: BiLogoFacebook,
    id: "facebook",
    src: "https://facebook.com",
  },
  {
    icon: AiOutlineTwitter,
    id: "twitter",
    src: "https://twitter.com",
  },
  {
    icon: BiLogoPinterestAlt,
    id: "pinterest",
    src: "https://pinterest.com",
  },
];

export const foodCategoryIcons: {
  category: string;
  icon: React.ElementType;
}[] = [
  {
    category: "Fast Food",
    icon: PiHamburgerLight,
  },
  {
    category: "Lunch",
    icon: PiCookieLight,
  },
  {
    category: "Dinner",
    icon: PiWineLight,
  },
];

export const blogIconLinks: TIcons[] = [
  { icon: AiOutlineLike, id: "Like", src: "/" },
  { icon: BiCommentDots, id: "Comment", src: "/" },
  { icon: GoShareAndroid, id: "Share", src: "/" },
];
