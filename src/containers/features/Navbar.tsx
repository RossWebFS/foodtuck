import { useLocation } from "react-router-dom";

import { Link } from "src/components/Link";

import { TRoute } from "src/types";
import { cn } from "src/utils";

interface NavbarProps {
  links: TRoute[];
  navItemStyles?: string;
  navStyles?: string;
}

export const Navbar = ({ links, navItemStyles, navStyles }: NavbarProps) => {
  const { pathname } = useLocation();

  const navLinks = links.map((link) => {
    return (
      <li key={link.routeName} className={navItemStyles}>
        <Link
          className={cn({
            "text-orange-400": pathname === link.path,
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
      <ul className={cn("flex items-center", navStyles)}>{navLinks}</ul>
    </nav>
  );
};
