import { Link } from "src/components/Link";
import { BackgroundImageWrapper } from "../layouts/BackgroundImageWrapper";

import { TFoodCategoryCard } from "src/types";

interface FoodCategoryListProps {
  foodCards: TFoodCategoryCard[];
}

export const FoodCategoryList = ({ foodCards }: FoodCategoryListProps) => {
  const categoryListItems = foodCards.map((category) => {
    return (
      <li
        key={category.buttonText}
        className="group cursor-pointer relative overflow-hidden bg-[url()]"
      >
        <BackgroundImageWrapper
          bgImg={category.img}
          imageStyles="rounded bg-cover"
        >
          <Link
            rounded="default"
            variant="button"
            size="lg"
            to="/"
            className="duration-500 absolute top-44 z-20 -left-48 group-hover:left-4"
          >
            {category.buttonText}
          </Link>

          <div className="bg-gradient-to-t group-hover:translate-y-0 translate-y-60 from-black/90 to-transparent z-10 h-60 w-56 transition-all duration-500"></div>
        </BackgroundImageWrapper>
      </li>
    );
  });

  return (
    <ul className="flex gap-6 justify-center h-60">{categoryListItems}</ul>
  );
};
