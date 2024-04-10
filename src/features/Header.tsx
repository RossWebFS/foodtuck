import { NavLink } from "react-router-dom";
import { navRoutes } from "src/constants";

import { PageWrapper } from "src/layout/PageWrapper";
import { Icon } from "src/components/Icon";

import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";

export const Header = () => {
  const navLinks = navRoutes.map((r, index) => {
    return (
      <li className="mx-3" key={index}>
        <NavLink
          className="text-gray-100 hover:text-gray-300 transition-colors duration-200"
          to={r.path}
        >
          {r.routeName}
        </NavLink>
      </li>
    );
  });

  return (
    <header className="bg-black h-20">
      <PageWrapper styles="flex justify-between items-center">
        <figure className="cursor-pointer">
          <NavLink to="/">
            <h1 className="helvetica text-white py-2 text-2xl">
              Food
              <span className="text-orange-400">tuck</span>
            </h1>
          </NavLink>
        </figure>

        <nav>
          <ul className="flex items-center">{[navLinks]}</ul>
        </nav>

        <section>
          <ul className="flex">
            <Icon>
              <RiSearchLine size={20} />
            </Icon>
            <Icon>
              <AiOutlineUser size={20} />
            </Icon>
            <Icon>
              <PiTote size={20} />
            </Icon>
          </ul>
        </section>
      </PageWrapper>
    </header>
  );
};
