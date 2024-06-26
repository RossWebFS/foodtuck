import { TCategoryIcons, TIcon, TIcons } from "src/types";

import {
  BiLogoFacebook,
  BiLogoPinterestAlt,
  BiCommentDots,
} from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import {
  PiHamburgerLight,
  PiCookieLight,
  PiWineLight,
  PiTote,
  PiToteSimpleFill,
  PiCheckSquareOffset,
  PiArrowLineUpRight,
} from "react-icons/pi";
import { GoShareAndroid, GoCommentDiscussion } from "react-icons/go";
import { BsYoutube, BsPinterest, BsCheck } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { IoClose, IoCalendarNumberOutline } from "react-icons/io5";
import { CiPlay1, CiHeart } from "react-icons/ci";
import { FaPlay, FaStar, FaRegEye } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { TfiLock } from "react-icons/tfi";
import { MdOutlineDelete } from "react-icons/md";

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
  outlinedUser: { icon: AiOutlineUser },
  outlinedCart: { icon: PiTote },
  cart: { icon: PiToteSimpleFill },
  comment: { icon: BiCommentDots },
  share: { icon: GoShareAndroid },
  close: { icon: IoClose },
  outlinedPlay: { icon: CiPlay1 },
  play: { icon: FaPlay },
  pause: { icon: FaPause },
  check: { icon: BsCheck },
  boxedCheck: { icon: PiCheckSquareOffset },
  burger: { icon: PiHamburgerLight },
  cookie: { icon: PiCookieLight },
  wine: { icon: PiWineLight },
  star: { icon: FaStar },
  outlinedHeart: { icon: CiHeart },
  heart: { icon: IoMdHeart },
  outlinedCalendar: { icon: IoCalendarNumberOutline },
  outlinedComments: { icon: GoCommentDiscussion },
  readMoreArrow: { icon: PiArrowLineUpRight },
  mail: { icon: AiOutlineMail },
  lock: { icon: TfiLock },
  bin: { icon: MdOutlineDelete },
  eye: { icon: FaRegEye },
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

export const singlePageLinks: TIcon[] = [
  icons.youtube,
  icons.facebook,
  icons.twitter,
  icons.instagram,
];
