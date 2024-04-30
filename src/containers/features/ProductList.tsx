import { TDishes } from "src/types";
import { formPrice } from "src/utils";

interface ProductListProps {
  dishes: TDishes[];
}

export const ProductList = ({ dishes }: ProductListProps) => {
  const shopItems = dishes.map((dish) => {
    return (
      <li className="w-[30%] border border-gray-100 shadow-md">
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

  return <ul className="flex flex-wrap gap-5 h-fit">{shopItems}</ul>;
};
