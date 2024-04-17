import { navRoutes } from "src/constants";
import { Navbar } from "./Navbar";
import { NavIconList } from "./NavIconList";
import { NavLogo } from "./NavLogo";
import { PageWrapper } from "src/layouts/PageWrapper";

export const Header = () => {
  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-20">
      <PageWrapper styles="flex justify-between items-center">
        <NavLogo path="/" logoText="Food" highlightedText="tuck" />

        <Navbar links={navRoutes} />

        <NavIconList />
      </PageWrapper>
    </header>
  );
};
