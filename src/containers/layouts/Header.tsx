import { Wrapper } from "src/containers/layouts/Wrapper";
import { Navbar } from "src/containers/features/Navbar";
import { NavIconList } from "src/containers/NavIconList";
import { NavLogo } from "src/containers/features/NavLogo";

import { routes } from "src/constants";

const links = [
  routes.HOME,
  routes.MENU,
  routes.BLOG,
  routes.ABOUT,
  routes.SHOP,
];

export const Header = () => {
  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-40">
      <Wrapper wrapStyles="flex justify-between items-center">
        <NavLogo path="/" logoText="Food" highlightedText="tuck" />
        <Navbar navItemStyles="mx-4" links={links} />
        <NavIconList />
      </Wrapper>
    </header>
  );
};
