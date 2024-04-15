import { useSearchInput } from "src/hooks/useSearchInput";

import { NavLink } from "react-router-dom";
import { navRoutes } from "src/constants";
import { TRoutes } from "src/types";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";

import { Icon } from "src/components/Icon";
import { Input } from "src/components/Input";
import { IconList } from "src/components/IconList";
import { PageWrapper } from "src/layout/PageWrapper";

interface NavbarProps {
  links: TRoutes[];
}

export const Header = () => {
  const icons: React.ReactNode[] = [
    <AiOutlineUser size={20} />,
    <PiTote size={20} />,
  ];

  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-20">
      <PageWrapper styles="flex justify-between items-center">
        <figure className="cursor-pointer">
          <NavLink to="/">
            <h1 className="font-semibold py-2 text-2xl">
              Food
              <span className="text-orange-400">tuck</span>
            </h1>
          </NavLink>
        </figure>

        <Navbar links={navRoutes} />

        <IconList listItemStyles="my-auto" icons={icons}>
          <li className="bg-black flex items-center mx-2 pr-3 border border-orange-400 rounded-full">
            <SearchInput />
          </li>
        </IconList>
      </PageWrapper>
    </header>
  );
};

const Navbar = ({ links }: NavbarProps) => {
  const isActiveStyle = ({ isActive }: any) =>
    isActive ? " text-orange-400" : "";

  const navLinks:React.ReactNode = links.map((l, index) => {
    return (
      <li className="mx-3 hover:text-gray-300 transition-colors duration-200">
        <NavLink to={l.path} key={index} className={isActiveStyle}>
          {l.routeName}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className="flex items-center">{navLinks}</ul>
    </nav>
  );
};


const SearchInput = () => {
  const { searchValue, setSearchValue } = useSearchInput();

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Input
        styles="text-gray-100 py-2 px-4 border-none focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchInputChange}
      />
      <Icon>
        <RiSearchLine size={20} />
      </Icon>
    </>
  );
};
