import { Link } from "react-router-dom";

import { linkVariants } from "src/styles/LinkStyles";
import { TLatestDish } from "src/types";
import { formPrice } from "src/utils";

interface LatestDishListProps {
    dishes: TLatestDish[]
}

export const LatestDishList = ({dishes}: LatestDishListProps) => {
  const latestDishItems = dishes.map((dish) => {
    return (
      <li className="py-3 flex">
        <img src={dish.img} alt={dish.title} />
        <div className="pl-2">
          <h5 className="text-lg font-semibold">
            <Link
              className={linkVariants({ variant: "colored" })}
              to={dish.ref}
            >
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
