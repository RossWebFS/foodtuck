import { NavLink } from "react-router-dom";

import { cn } from "src/utils";

interface NavLogoProps {
  path: string;
  logoText: string;
  highlightedText?: string;
  logoTextStyles?: string;
  highlightStyles?: string;
}

export const NavLogo = ({
  path = "/",
  logoText,
  highlightedText,
  logoTextStyles,
  highlightStyles,
}: NavLogoProps) => {
  return (
    <figure className="cursor-pointer">
      <NavLink to={path}>
        <h1 className={cn("font-semibold py-2 text-2xl", logoTextStyles)}>
          {logoText}
          <span className={cn("text-orange-400", highlightStyles)}>
            {highlightedText}
          </span>
        </h1>
      </NavLink>
    </figure>
  );
};
