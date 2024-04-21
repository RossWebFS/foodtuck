import { Link } from "src/components/Link";

import { TFoodCategories } from "src/types";
import { cn } from "src/utils";

interface FoodCategoryListItemProps {
  category: TFoodCategories;
  buttonStyles?: string;
  animationBoxStyles?: string;
}

export const FoodCategoryListItem = ({
  category,
  buttonStyles,
  animationBoxStyles,
}: FoodCategoryListItemProps) => {
  return (
    <>
      <img
        className="w-56 h-60 rounded object-cover"
        src={`${category.img}`}
        alt={category.alt}
      />

      <Link
        rounded="default"
        variant="button"
        size="lg"
        path=""
        className={cn(
          "duration-500 absolute top-44 z-20 -left-48 group-hover:left-4",
          buttonStyles
        )}
      >
        {category.buttonText}
      </Link>

      <div
        className={cn(
          "bg-gradient-to-t group-hover:-translate-y-60 from-black/90 to-transparent z-10 h-60 w-56 transition-all duration-500",
          animationBoxStyles
        )}
      ></div>
    </>
  );
};
