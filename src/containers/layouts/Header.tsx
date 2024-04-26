import { Wrapper } from "src/containers/layouts/Wrapper";
import { Navbar } from "src/containers/features/Navbar";
import { NavIconList } from "src/containers/features/NavIconList";
import { NavLogo } from "src/containers/features/NavLogo";

import { navRoutes } from "src/constants";

export const Header = () => {
  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-50">
      <Wrapper wrapStyles="flex justify-between items-center">
        <NavLogo path="/" logoText="Food" highlightedText="tuck" />
        <Navbar
          navListItemStyles="mx-4"
          links={navRoutes}
          linkStyles="hover:text-gray-300"
        />
        <NavIconList />
      </Wrapper>
    </header>
  );
};
