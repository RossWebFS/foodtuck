import { TDishes } from "src/types";
import { cn, formPrice } from "src/utils";

interface ProductListProps {
  dishes: TDishes[];
  itemStyles?: string;
  listStyles?: string;
}

export const ProductList = ({
  dishes,
  itemStyles,
  listStyles,
}: ProductListProps) => {
  const shopItems = dishes.map((dish) => {
    return (
      <li className={cn("border border-gray-100 shadow-md", itemStyles)}>
        <img src={dish.img} alt={dish.title} />
        <div className="p-2">
          <h5 className="text-lg font-semibold my-1">{dish.title}</h5>
          <span className="text-orange-400 text-lg">
            $
            {dish.saledPrice
              ? formPrice(dish.saledPrice)
              : formPrice(dish.basicPrice)}
          </span>
          {dish.saledPrice && (
            <span className="text-gray-500 ml-2">
              <del>${formPrice(dish.basicPrice)}</del>
            </span>
          )}
        </div>
      </li>
    );
  });

  return (
    <ul className={cn("grid grid-cols-3 gap-5 h-fit", listStyles)}>
      {shopItems}
    </ul>
  );
};
