import { navRoutes } from "src/constants";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";

import { Navbar } from "./Navbar";
import { NavLogo } from "./ui/NavLogo";
import { SearchInput } from "./ui/SearchInput";
import { IconList } from "src/features/ui/IconList";
import { PageWrapper } from "src/layout/PageWrapper";

export const Header = () => {
  const headerIcons = [<AiOutlineUser size={20} />, <PiTote size={20} />];

  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-20">
      <PageWrapper styles="flex justify-between items-center">
        <NavLogo />

        <Navbar links={navRoutes} />

        <IconList listItemStyles="my-auto" icons={headerIcons}>
          <li className="bg-black flex items-center mx-2 pr-3 border border-orange-400 rounded-full">
            <SearchInput />
          </li>
        </IconList>
      </PageWrapper>
    </header>
  );
};
