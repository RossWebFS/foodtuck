import { Link } from "src/components/Link";
import { TDishCount } from "src/types";
import { formPrice } from "src/utils";

interface LatestDishListProps {
  dishes: TDishCount[];
}

export const LatestDishList = ({ dishes }: LatestDishListProps) => {
  const latestDishItems = dishes.map((dish) => {
    return (
      <li className="py-3 flex">
        <img className="w-16 h-16" src={dish.img} alt={dish.title} />
        <div className="pl-2">
          <h5 className="text-lg font-semibold">
            <Link variant="colored" to={`/shop-details/${dish.id}`}>
              {dish.title}
            </Link>
          </h5>
          <span className="text-gray-500">${formPrice(dish.price)}</span>
        </div>
      </li>
    );
  });

  return <ul>{latestDishItems}</ul>;
};
