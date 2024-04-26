import { navRoutes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";

export const MenuPage = () => {
  const [...links] = [navRoutes[0], navRoutes[1]];

  return (
    <main className="text-gray-100 bg-black pt-20">
      <PageIntro title="Our Menu" links={links} />
    </main>
  );
};
