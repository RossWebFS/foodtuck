import { NavLink } from "react-router-dom";

export const NavLogo = () => {
  return (
    <figure className="cursor-pointer">
      <NavLink to="/">
        <h1 className="font-semibold py-2 text-2xl">
          Food
          <span className="text-orange-400">tuck</span>
        </h1>
      </NavLink>
    </figure>
  );
};
