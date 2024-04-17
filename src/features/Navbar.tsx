import { NavLink } from "react-router-dom";
import { TRoutes } from "src/types";
import { cn } from "src/utils";

interface NavbarProps {
  links: TRoutes[];
  activeLinkStyles?: string;
  navListItemStyles?: string;
  navListStyles?: string;
}

export const Navbar = ({
  links,
  activeLinkStyles,
  navListItemStyles,
  navListStyles,
}: NavbarProps) => {
  const isActiveLinkStyles = ({ isActive }: any) =>
    isActive ? cn("text-orange-400", activeLinkStyles) : "";

  const navLinks = links.map((link, index) => {
    return (
      <li
        key={index}
        className={cn(
          "mx-3 hover:text-gray-300 transition-colors duration-200",
          navListItemStyles
        )}
      >
        <NavLink className={isActiveLinkStyles} to={link.path}>
          {link.routeName}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className={cn("flex items-center", navListStyles)}>{navLinks}</ul>
    </nav>
  );
};
