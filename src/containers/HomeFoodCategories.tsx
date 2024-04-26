import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { FoodCategoryListItem } from "./features/FoodCategoryListItem";

import { foodCategories } from "src/constants";

export const HomeFoodCategorySection = () => {
  const categoryListItems = foodCategories.map((category) => {
    return (
      <li
        key={category.buttonText}
        className="group cursor-pointer relative overflow-hidden"
      >
        <FoodCategoryListItem category={category} />
      </li>
    );
  });

  return (
    <BackgroundImageWrapper imageFilter="pb-16">
      <Wrapper>
        <header className="text-center mb-10">
          <p className="great-vibes text-orange-400 text-2xl ">Food Category</p>
          <h1 className="text-5xl font-bold mt-2 mb-5">
            <span className="text-orange-400">Choose </span>
            Food Item
          </h1>
        </header>

        <ul className="flex gap-6 justify-center h-60">{categoryListItems}</ul>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
