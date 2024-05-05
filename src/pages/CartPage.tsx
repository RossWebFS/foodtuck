import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { ProductCartItem } from "src/containers/features/ProductCartItem";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { dishes } from "src/constants";

export const CartPage = () => {
  const links = [routes.HOME, routes.CART];
  const cartProducts = dishes.map((dish) => <ProductCartItem product={dish} />);

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shopping Cart" />

      <Wrapper wrapStyles="max-w-[1200px]">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left w-[30%]">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center w-1/5">Quantity</th>
              <th className="text-center w-1/5">Total</th>
              <th className="text-center w-[15%]">Remove</th>
            </tr>
          </thead>
          <tbody>{cartProducts}</tbody>
        </table>
      </Wrapper>
    </main>
  );
};
