import { PageSectionImageWrapper } from "src/containers/layouts/PageSectionImageWrapper";
import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { FoodCategoryListItem } from "./features/FoodCategoryListItem";

import { foodCategories } from "src/constants";

interface HomeFoodCategorySectionProps {
  cursiveText?: string;
  title?: string;
  highlightedText?: string;
}

export const HomeFoodCategorySection = ({
  cursiveText,
  title,
  highlightedText,
}: HomeFoodCategorySectionProps) => {
  const categoryListItems = foodCategories.map((category) => {
    return (
      <li key={category.buttonText} className="group cursor-pointer relative overflow-hidden">
        <FoodCategoryListItem category={category} />
      </li>
    );
  });

  return (
    <PageSectionImageWrapper imageFilter="pb-16">
      <PageWrapper>
        <header className="text-center mb-10">
          <p className="great-vibes text-orange-400 text-2xl ">{cursiveText}</p>
          <h1 className="text-5xl font-bold mt-2 mb-5">
            <span className="text-orange-400">{highlightedText}</span>
            {title}
          </h1>
        </header>

        <ul className="flex gap-6 justify-center h-60">{categoryListItems}</ul>
      </PageWrapper>
    </PageSectionImageWrapper>
  );
};
