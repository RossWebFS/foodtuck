import { Tabs } from "src/containers/features/Tabs";
import { categoryTabs } from "src/constants";
import BreakfastCategory from "src/assets/products/BreackfastCategory.png";
import menuCategoryDill from "src/assets/decorations/menuCategoryDill.png";
import { PageWrapper } from "./layouts/PageWrapper";
import { breakfastDishes } from "src/constants";

// non-refactored

export const FoodCategoryFilter = () => {
  const breackfastDishesListItems = breakfastDishes.map((dish) => {
    return (
      <li key={dish.title} className="flex my-4 gap-2">
        <img className="object-cover" src={dish.img} alt={dish.title} />
        <div>
          <h5 className="font-semibold text-xl">{dish.title}</h5>
          <p className="text-gray-300 text-sm my-1">{dish.description}</p>
          <span className="text-lg text-orange-400 font-semibold">
            {dish.price}
          </span>
        </div>
      </li>
    );
  });

  return (
    <PageWrapper>
      <section className="py-16">
        <div className="text-center mb-12">
          <p className="great-vibes text-orange-400 text-2xl">Choose & pick</p>
          <h2 className="text-5xl font-bold mt-3 mb-6">
            <span className="text-orange-400">From</span> Our Menu
          </h2>
        </div>

        <Tabs tabList={categoryTabs} />
      </section>

      <section className="relative flex justify-around">
        <div className="relative">
          <img src={menuCategoryDill} alt="decoration dill" />
          <img
            className="z-10 absolute top-4 left-20"
            src={BreakfastCategory}
            alt="breakfast dish"
          />
        </div>

        <ul>{breackfastDishesListItems}</ul>
      </section>
    </PageWrapper>
  );
};
