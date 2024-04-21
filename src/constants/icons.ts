import { TIcons } from "src/types";

import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { PiHamburgerLight, PiCookieLight, PiWineLight } from "react-icons/pi";

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
  