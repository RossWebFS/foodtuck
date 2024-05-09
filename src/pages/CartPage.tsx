import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { ProductCartItem } from "src/containers/features/ProductCartItem";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { WishProductItem } from "src/containers/features/WishProductItem";
import { useProductStore } from "src/hooks/ProductStore";
import { Link } from "src/components/Link";
import { ShopBill } from "src/containers/features/ShopBill";
import { TDishCount } from "src/types";

export const CartPage = () => {
  const [cart, wishList] = useProductStore((state) => [
    state.cart,
    state.wishList,
  ]);

  const links = [routes.HOME, routes.CART];
  const cartProducts = cart.map((dish) => <ProductCartItem product={dish} />);
  const wishProducts = wishList.map((dish: TDishCount) => (
    <WishProductItem product={dish} />
  ));

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shopping Cart" />

      <Wrapper wrapStyles="max-w-[1200px]">
        <h2 className="text-2xl font-semibold mb-10 mt-16">Shopping cart</h2>
        <section className="min-h-64 flex justify-center items-center">
          {cart.length ? (
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
          ) : (
            <p className="text-2xl font-semibold">
              The cart is Empty You can choose dishes in our{" "}
              <Link
                to="/shop"
                className="text-orange-400 hover:text-orange-500"
              >
                Shop
              </Link>
            </p>
          )}
        </section>

        <h2 className="text-2xl font-semibold mb-10 mt-16">Wish list</h2>
        <section className="mb-16 min-h-64 flex justify-center items-center">
          {wishList.length ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left w-[]">Product</th>
                  <th className="text-center w-[30%]">Categories</th>
                  <th className="text-center w-[25%]">Price</th>
                  <th className="text-center w-[15%]">Remove</th>
                </tr>
              </thead>
              <tbody>{wishProducts}</tbody>
            </table>
          ) : (
            <p className="text-2xl font-semibold">
              The wishList is Empty You can choose dishes in our{" "}
              <Link
                to="/shop"
                className="text-orange-400 hover:text-orange-500"
              >
                Shop
              </Link>
            </p>
          )}
        </section>

        <ShopBill />
      </Wrapper>
    </main>
  );
};
