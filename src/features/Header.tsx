import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../constants/constants";
import { NavIcon } from "../components/NavIcon";
import { PageWrapper } from "../layout/PageWrapper";

export const Header = () => {
  return (
    <header className="bg-black h-20">
      <PageWrapper>
      <figure className="cursor-pointer">
          <NavLink to="/">
            <h1 className="helvetica text-white py-2 text-2xl">
              Food
              <span className="text-orange-400">tuck</span>
            </h1>
          </NavLink>
        </figure>

        <nav>
          <ul className="flex items-center">
            {navRoutes.map((r, index) => {
              return (
                <li className="mx-3" key={index}>
                  <NavLink
                    className="text-gray-100 hover:text-gray-300 transition-colors duration-200"
                    to={r === "home" ? "/" : r}
                  >
                    {r[0].toUpperCase() + r.slice(1)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <section>
          <ul className="flex">
            <NavIcon>
              <RiSearchLine size={20} />
            </NavIcon>
            <NavIcon>
              <AiOutlineUser size={20} />
            </NavIcon>
            <NavIcon>
              <PiTote size={20} />
            </NavIcon>
          </ul>
        </section>
      </PageWrapper>
    </header>
  );
};
