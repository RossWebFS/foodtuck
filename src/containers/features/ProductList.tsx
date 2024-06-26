import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";
import { icons } from "src/constants";
import { cn } from "src/utils";
import { useProductStore } from "src/store/ProductStore";
import { TDishCount } from "src/types";

interface ProductListProps {
  itemStyles?: string;
  listStyles?: string;
  products: TDishCount[];
  limit?: number;
  page?: number;
}

export const ProductList = ({
  itemStyles,
  listStyles,
  products,
  limit,
  page,
}: ProductListProps) => {
  const [
    cart,
    wishList,
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
  ] = useProductStore((state) => [
    state.cart,
    state.wishList,
    state.addToCart,
    state.addToWishList,
    state.removeFromCart,
    state.removeFromWishList,
  ]);

  const shopItems = products.map((dish) => {
    const hasDishInCart = cart.some((item) => item.title === dish.title);
    const hasDishInWishList = wishList.some(
      (item) => item.title === dish.title
    );
    return (
      <li
        className={cn(
          "group border border-gray-100 shadow-md relative",
          itemStyles
        )}
      >
        <img
          className="object-cover aspect-square"
          src={dish.img}
          alt={dish.title}
        />
        <div className="p-2">
          <h5 className="text-lg font-semibold my-1">
            <Link
              to={`/shop-details/${dish._id}`}
              className="hover:text-orange-500"
            >
              {dish.title}
            </Link>
          </h5>
          <span className="text-orange-400 text-lg">${dish.price}</span>
          <ul className="flex gap-2 absolute top-[35%] left-[35%] opacity-0 group-hover:opacity-100 transition-all duration-300">
            <li>
              {hasDishInWishList ? (
                <Icon
                  IconComponent={icons.heart.icon}
                  className="p-1 w-8 h-8 bg-gray-100 text-orange-400"
                  variant="boxed"
                  onClick={() => removeFromWishList(dish)}
                />
              ) : (
                <Icon
                  IconComponent={icons.outlinedHeart.icon}
                  className="p-1 w-8 h-8 bg-gray-100 text-orange-400 hover:bg-orange-400 hover:text-gray-100 transition-colors duration-300"
                  variant="boxed"
                  onClick={() => addToWishList(dish)}
                />
              )}
            </li>
            <li>
              {hasDishInCart ? (
                <Icon
                  IconComponent={icons.cart.icon}
                  className="p-1 w-8 h-8 bg-gray-100 text-orange-400"
                  variant="boxed"
                  onClick={() => removeFromCart(dish)}
                />
              ) : (
                <Icon
                  IconComponent={icons.outlinedCart.icon}
                  className="p-1 w-8 h-8 bg-gray-100 text-orange-400 hover:bg-orange-400 hover:text-gray-100 transition-colors duration-300"
                  variant="boxed"
                  onClick={() => addToCart(dish)}
                />
              )}
            </li>
          </ul>
        </div>
      </li>
    );
  });

  return products.length ? (
    <ul className={cn("gap-5 min-h-[42rem] items-start mr-5", listStyles)}>
      {limit && page
        ? page > 1
          ? shopItems.slice(limit * (page - 1), limit * page)
          : shopItems.slice(0, limit)
        : shopItems}
    </ul>
  ) : (
    <div className="h-48 mr-5 flex justify-center text-2xl font-semibold items-center w-full">
      <p>There are no dishes</p>
    </div>
  );
};
