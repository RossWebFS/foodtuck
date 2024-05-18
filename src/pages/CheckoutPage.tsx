import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { useProductStore } from "src/store/ProductStore";
import { TESelect } from "tw-elements-react";

export const CheckoutPage = () => {
  const [cart, bill] = useProductStore((state) => [state.cart, state.bill]);

  const cartList = cart.map((dish) => {
    return (
      <li className="my-3 hover:bg-gray-200">
        <Link
          className="flex gap-3 hover:text-black"
          to={`/shop-details/${dish.id}`}
        >
          <img className="w-20 h-20" src={dish.img} alt={dish.title} />
          <div>
            <h4 className="text-lg font-semibold">{dish.title}</h4>
            <p className="my-1">{dish.calories} cal</p>
            <p>${dish.price}</p>
          </div>
        </Link>
      </li>
    );
  });

  const links = [routes.HOME, routes.CHECKOUT];
  return (
    <main className="py-20">
      <PageIntro links={links} title="Checkout Page" />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section>
          <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
          <form action="" className="grid grid-cols-2 gap-4">
            <div>
              <label className="block my-1" htmlFor="#checkout-name">
                First name
              </label>
              <Input
                id="checkout-name"
                className="focus:outline-orange-400 w-96 h-10"
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-lastName">
                Last name
              </label>
              <Input
                id="checkout-lastName"
                className="focus:outline-orange-400 w-96 h-10"
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-email">
                Email address
              </label>
              <Input
                id="checkout-email"
                className="focus:outline-orange-400 w-96 h-10"
                type="email"
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-tel">
                Phone number
              </label>
              <Input
                id="checkout-tel"
                className="focus:outline-orange-400 w-96 h-10"
                type="tel"
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-name">
                Country
              </label>
              <TESelect
                id="request-filter"
                data={
                  [
                    //   { text: "Below 300", value: "low" },
                    //   { text: "Between 300 and 600", value: "middle" },
                    //   { text: "Over 600", value: "high" },
                  ]
                }
                className="h-12 w-96 rounded-none"
                placeholder="Choose country"
                onValueChange={(e) => {}}
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-name">
                City
              </label>
              <TESelect
                id="request-filter"
                data={
                  [
                    //   { text: "Below 300", value: "low" },
                    //   { text: "Between 300 and 600", value: "middle" },
                    //   { text: "Over 600", value: "high" },
                  ]
                }
                className="h-12 w-96 rounded-none"
                placeholder="Choose city"
                onValueChange={(e) => {}}
              />
            </div>
            <div>
              <label className="block my-1" htmlFor="#checkout-address">
                Address
              </label>
              <Input
                id="checkout-address"
                className="focus:outline-orange-400 w-96 h-10"
              />
            </div>
          </form>

          <div>
            <h2 className="text-xl font-semibold mb-3">Billing Address</h2>
            <div className="flex items-center gap-2">
              <input
                id="shipping-address"
                className="accent-orange-600 w-4 h-4"
                type="checkbox"
              />
              <label htmlFor="#shipping-address">
                Same as shipping address
              </label>
            </div>

            <div className="flex gap-6 mt-6">
              <Link
                to="/cart"
                className="w-1/2 bg-transparent text-black border text-center border-gray-300 py-3"
              >
                Back to cart
              </Link>
              <Button className="w-1/2 py-3">Proceed to shipping</Button>
            </div>
          </div>
        </section>
        <section className="p-5 border border-gray-300 w-1/3">
          <ul className="h-72 overflow-y-auto coloredScrollbar pr-2">
            {cartList}
          </ul>

          <div className="border-t border-t-gray-300 flex justify-between my-3 pt-5">
            <div>
              <p>Subtotal:</p>
              <p className="my-3">Shipping:</p>
              <p>Tax:</p>
            </div>
            <div className="text-end">
              <p>${Math.abs(+bill.toFixed(2))}</p>
              <p className="my-3">Free</p>
              <p>${Math.abs(+(bill * 0.25).toFixed(2))}</p>
            </div>
          </div>
          <div className="flex justify-between my-3 py-3 border-t border-t-gray-300">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">
              ${Math.abs(+(bill * 1.25).toFixed(2))}
            </p>
          </div>
          <Button size="lg" className="w-full">
            Place an order
          </Button>
        </section>
      </Wrapper>
    </main>
  );
};
