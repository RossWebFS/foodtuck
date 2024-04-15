import { NavLink } from "react-router-dom";

import { TRoutes } from "src/types";

interface NavbarProps {
  links: TRoutes[];
}

export const Navbar = ({ links }: NavbarProps) => {
  const isActiveStyle = ({ isActive }: any) =>
    isActive ? " text-orange-400" : "";

  const navLinks = links.map((l, index) => {
    return (
      <li key={index} className="mx-3 hover:text-gray-300 transition-colors duration-200">
        <NavLink to={l.path} className={isActiveStyle}>
          {l.routeName}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className="flex items-center">{[navLinks]}</ul>
    </nav>
  );
};