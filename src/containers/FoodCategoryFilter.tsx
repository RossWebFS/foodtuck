import { Tabs } from "src/containers/features/Tabs";
import { Wrapper } from "./layouts/Wrapper";

import { categoryTabs } from "src/constants";

import menuCategoryDill from "src/assets/decorations/menuCategoryDill.png";
import { useState } from "react";
import { Link } from "src/components/Link";
import { cn } from "src/utils";
import { useProductStore } from "src/store/ProductStore";

interface FoodCategoryFilterProps {
  img?: string;
}

export const FoodCategoryFilter = ({ img }: FoodCategoryFilterProps) => {
  const products = useProductStore(state => state.products)
  const [category, setCategory] = useState<string>(categoryTabs[0]);

  const filterDishes = products.filter((dish) => {
    return dish.category.includes(category.replace(/\s/g, ""));
  });

  const filteredListItems = filterDishes.map((dish) => (
    <li className="flex m-4 gap-2 self-start">
      <img
        className="object-cover w-20 h-20 rounded-md"
        src={dish.img}
        alt={dish.title}
      />
      <div>
        <h5 className="font-semibold text-xl">
          <Link to={`/shop-details/${dish._id}`}>{dish.title}</Link>
        </h5>
        <p className="text-gray-500 text-sm my-1">{dish.receipe.join(", ")}</p>
        <span className="text-lg text-orange-400 font-semibold">
          ${dish.price}
        </span>
      </div>
    </li>
  ));

  return (
    <Wrapper>
      <section className="py-10">
        <div className="text-center mb-12">
          <p className="great-vibes text-orange-400 text-2xl">Choose & pick</p>
          <h2 className="text-5xl font-bold mt-3 mb-6">
            <span className="text-orange-400">From</span> Our Menu
          </h2>
        </div>

        <Tabs tabList={categoryTabs} setCategory={setCategory} />
      </section>

      <section className="flex h-[30rem]">
        {img && (
          <div className="relative w-2/5 h-full">
            <img src={menuCategoryDill} alt="decoration dill" />
            <img className="z-10 absolute top-4 left-20" src={img} alt="dish" />
          </div>
        )}

        {filteredListItems.length ? (
          <ul
            className={cn("grid grid-cols-2 h-fit w-3/5", {
              "w-full": !img,
            })}
          >
            {filteredListItems}
          </ul>
        ) : (
          <p
            className={cn("text-center w-3/5 text-xl", {
              "w-full": !img,
            })}
          >
            There're no dishes yet..
          </p>
        )}
      </section>
    </Wrapper>
  );
};
