import { dishes1, routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";

export const CartPage = () => {
  const links = [routes.HOME, routes.CART];

  const cartProducts = dishes1.map((dish) => {
    return (
      <li>
        <div>
          <img src={dish.img} alt={dish.title} />
        </div>
      </li>
    );
  });

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shopping Cart" />
      <Wrapper>
        <ul>{cartProducts}</ul>
      </Wrapper>
    </main>
  );
};
