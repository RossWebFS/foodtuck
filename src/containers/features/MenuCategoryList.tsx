import { Link } from "src/components/Link";
import { Wrapper } from "src/containers/layouts/Wrapper";

import { TMenuDishInfo } from "src/types";
import { cn } from "src/utils";

interface MenuCategoryListProps {
  img: string;
  title: string;
  dishes: TMenuDishInfo[];
  direction?: "flex-row" | "flex-row-reverse";
}

export const MenuCategoryList = ({
  img,
  title,
  dishes,
  direction = "flex-row",
}: MenuCategoryListProps) => {
  const dishItems = dishes.map((dish) => {
    return (
      <li className="flex justify-between my-8">
        <div>
          <h3 className="text-xl font-semibold">
            <Link variant="colored" to={dish.ref}>
              {dish.title}
            </Link>
          </h3>
          <p className="text-sm my-2">{dish.ingredients}</p>
          <span className="text-gray-500">{dish.calories} CAL</span>
        </div>
        <span className="text-orange-400 font-semibold text-lg">
          {dish.price}$
        </span>
      </li>
    );
  });

  return (
    <Wrapper wrapStyles="flex justify-center">
      <article
        className={cn(
          "flex justify-between items-center py-10 w-4/5",
          direction
        )}
      >
        <img className="w-[35%] size-fit" src={img} alt={title} />
        <section className="w-[57%]">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <ul>{dishItems}</ul>
        </section>
      </article>
    </Wrapper>
  );
};
