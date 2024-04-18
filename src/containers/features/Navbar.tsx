import { Link, useLocation } from "react-router-dom";

import { TRoutes } from "src/types";
import { cn } from "src/utils";

interface NavbarProps {
  links: TRoutes[];
  linkStyles?: string;
  navListItemStyles?: string;
  navListStyles?: string;
}

export const Navbar = ({
  links,
  linkStyles,
  navListItemStyles,
  navListStyles,
}: NavbarProps) => {
  const { pathname } = useLocation();

  const navLinks = links.map((link) => {
    const isActiveLink = pathname === link.path;

    return (
      <li key={link.routeName} className={navListItemStyles}>
        <Link
          className={cn("transition-all duration-200", linkStyles, {
            "text-orange-400": isActiveLink,
          })}
          to={link.path}
        >
          {link.routeName}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className={cn("flex items-center", navListStyles)}>{navLinks}</ul>
    </nav>
  );
};
