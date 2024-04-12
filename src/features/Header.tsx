import { useSearchInput } from "src/hooks/useSearchInput";

import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";

import { navRoutes } from "src/constants";
import { PageWrapper } from "src/layout/PageWrapper";
import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";

export const Header: React.FC = () => {
  const { searchValue, setSearchValue } = useSearchInput();

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const navLinks = navRoutes.map((r, index) => {
    return (
      <Link path={r.path} styles="mx-3" key={index}>
        {r.routeName}
      </Link>
    );
  });

  return (
    <header className="bg-black h-20 text-gray-100">
      <PageWrapper styles="flex justify-between items-center">
        <figure className="cursor-pointer">
          <NavLink to="/">
            <h1 className="font-semibold py-2 text-2xl">
              Food
              <span className="text-orange-400">tuck</span>
            </h1>
          </NavLink>
        </figure>

        <nav>
          <ul className="flex items-center">{[navLinks]}</ul>
        </nav>

        <section>
          <ul className="flex items-center">
            <Icon styles="mx-2">
              <div className="flex rounded-full border-orange-400 border py-1.5 px-3">
                <input
                  className="text-gray-100 bg-transparent focus:outline-none pr-1.5"
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={onSearchInputChange}
                />
                <RiSearchLine size={20} />
              </div>
            </Icon>
            <Icon styles="mx-2">
              <AiOutlineUser size={20} />
            </Icon>
            <Icon styles="mx-2">
              <PiTote size={20} />
            </Icon>
          </ul>
        </section>
      </PageWrapper>
    </header>
  );
};
