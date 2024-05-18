import { Button } from "src/components/Button";
import { icons, routes, singlePageLinks } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";

import { Link, useParams } from "react-router-dom";
import { cn } from "src/utils";

import { Wrapper } from "src/containers/layouts/Wrapper";

import { PiTote } from "react-icons/pi";
import { IconList } from "src/containers/features/IconList";
import { ProductList } from "src/containers/features/ProductList";
import { Counter } from "src/containers/features/Counter";
import { useProductStore } from "src/store/ProductStore";
import { Rating } from "src/components/Rating";
import { Icon } from "src/components/Icon";
import path from "path";

export const ProductSinglePage = () => {
  const [
    products,
    increaseDishCount,
    decreaseDishCount,
    cart,
    wishList,
    addToCart,
    removeFromCart,
    addToWishList,
    removeFromWishList,
  ] = useProductStore((state) => [
    state.products,
    state.increaseDishCount,
    state.decreaseDishCount,
    state.cart,
    state.wishList,
    state.addToCart,
    state.removeFromCart,
    state.addToWishList,
    state.removeFromWishList,
  ]);

  const { id } = useParams();

  const links = [
    routes.HOME,
    { ...routes.SHOP_DETAILS, path: `${routes.SHOP_DETAILS.path}/${id}` },
  ];

  const product = products.find((dish) => dish.id === id);

  const onAdd = () => {
    product && increaseDishCount(product);
  };
  const onSubract = () => {
    product && decreaseDishCount(product);
  };

  const sameDishes = products.filter((dish) => {
    return (
      dish.category.some((category) => product?.category.includes(category)) &&
      dish.id !== id
    );
  });

  const otherDishes = products.filter((dish) => {
    return (
      !dish.category.some((category) => product?.category.includes(category)) &&
      dish.id !== id
    );
  });

  console.log(sameDishes);

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shop Details" />
      <Wrapper>
        {product && (
          <section className="flex justify-around mb-10 mt-20">
            <section className="w-[45%] grid grid-cols-[auto_minmax(auto,_auto)] grid-rows-4 gap-5">
              {sameDishes[0] && (
                <ImageLink
                  src={sameDishes[0].img}
                  path={`/shop-details/${sameDishes[0].id}`}
                  alt={sameDishes[0].title}
                />
              )}
              <img
                className="row-span-4 h-full object-cover"
                src={product.img}
                alt={product.title}
              />
              {sameDishes[1] && (
                <ImageLink
                  src={sameDishes[1].img}
                  path={`/shop-details/${sameDishes[1].id}`}
                  alt={sameDishes[1].title}
                />
              )}
              {sameDishes[2] && (
                <ImageLink
                  src={sameDishes[2].img}
                  path={`/shop-details/${sameDishes[2].id}`}
                  alt={sameDishes[2].title}
                />
              )}
              {sameDishes[3] && (
                <ImageLink
                  src={sameDishes[3].img}
                  path={`/shop-details/${sameDishes[3].id}`}
                  alt={sameDishes[3].title}
                />
              )}
            </section>

            <section className="w-[45%]">
              <div className="border-b border-b-gray-200 pb-4 mt-2 mb-6">
                <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
                <ul className="list-disc">
                  {product.receipe.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-2xl font-semibold">${product.price}</span>

                <div className="flex items-center gap-3 mt-3">
                  <Rating rating={product.rating} />
                  <span className="border-l border-l-black pl-3">
                    {product.rating.toFixed(1)} Rating
                  </span>
                </div>

                <p className="flex py-3">{product.calories} cal</p>

                <div className="flex items-center gap-5 border-b border-b-gray-200 pb-4">
                  <div className="text-xl">
                    <Counter
                      counter={product.count}
                      onAdd={onAdd}
                      onSubract={onSubract}
                    />
                  </div>

                  {cart.some((dish) => dish.id === id) ? (
                    <Button
                      className="px-5 py-2 h-auto group"
                      variant="outlined"
                      onClick={() => removeFromCart(product)}
                    >
                      <Icon
                        className="mr-2 text-orange-400 group-hover:text-gray-100"
                        IconComponent={PiTote}
                      />
                      Remove from cart
                    </Button>
                  ) : (
                    <Button
                      className="px-5 py-2 h-auto"
                      onClick={() => addToCart(product)}
                    >
                      <Icon
                        className="mr-2 hover:text-gray-100"
                        IconComponent={PiTote}
                      />
                      Add to cart
                    </Button>
                  )}
                </div>

                <div className="mt-3">
                  {wishList.some((dish) => dish.id === id) ? (
                    <div>
                      <Icon
                        IconComponent={icons.heart.icon}
                        className="text-orange-400 w-6 h-6"
                        onClick={() => removeFromWishList(product)}
                      />
                      <span className="ml-3">Remove from wish list</span>
                    </div>
                  ) : (
                    <div>
                      <Icon
                        IconComponent={icons.outlinedHeart.icon}
                        className="text-orange-400 w-6 h-6"
                        onClick={() => addToWishList(product)}
                      />
                      <span className="ml-3">Add to wish list</span>
                    </div>
                  )}
                  <p>Category: {product.category.join(", ")}</p>
                  <p>Tag: {product.tags.join(", ")}</p>

                  <div className="flex mt-3 pb-4 border-b border-b-gray-200">
                    <p>Share:</p>
                    <IconList
                      icons={singlePageLinks}
                      iconStyles="hover:text-gray-200"
                      listItemStyles="px-[5px] pb-0.5 bg-gray-700 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}

        <article>
          <div className="mb-6 bg-orange-400 px-7 py-2 w-fit text-gray-100">
            Description
          </div>

          <p className="my-6">{product?.description}</p>
        </article>

        <section className="mt-20 mb-10">
          <h2 className="text-3xl font-semibold mb-4">Other Products</h2>
          <ProductList
            listStyles={cn(
              "flex justify-center min-h-0 overflow-x-auto coloredScrollbar pb-8",
              {
                "justify-start": otherDishes.length > 4,
              }
            )}
            itemStyles="flex-shrink-0 w-[23.75%]"
            products={otherDishes}
          />
        </section>
      </Wrapper>
    </main>
  );
};

interface ImageLinkProps {
  src: string;
  alt?: string;
  path: string;
  styles?: string;
}

const ImageLink = ({ src, alt, path, styles }: ImageLinkProps) => {
  return (
    <Link to={path}>
      <img
        className={cn(
          "object-cover aspect-square w-32 transition-all duration-300 rounded-lg hover:border-2 hover:border-orange-400",
          styles
        )}
        src={src}
        alt={alt}
      />
    </Link>
  );
};
