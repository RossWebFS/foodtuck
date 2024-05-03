import { dishes1, routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";

export const CartPage = () => {
  const links = [routes.HOME, routes.CART];

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shopping Cart" />
    </main>
  );
};
