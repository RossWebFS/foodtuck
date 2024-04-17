import { SectionWrapper } from "src/layouts/SectionWrapper";
import { PageWrapper } from "src/layouts/PageWrapper";
import { foodCategories } from "src/constants";
import { Link } from "src/components/Link";

export const FoodCategoriesList = () => {
  const categoryListItems: React.ReactNode[] = foodCategories.map((c) => {
    return (
      <li className="group cursor-pointer relative overflow-hidden">
        <img
          className="w-56 h-60 rounded object-cover"
          src={`${c.src}`}
          alt={c.alt}
        />

        <Link
          rounded="default"
          variant="button"
          size="lg"
          path=""
          className="duration-500 absolute top-44 z-20 -left-48 group-hover:left-4"
        >
          {c.buttonText}
        </Link>
        <div className="bg-gradient-to-t group-hover:-translate-y-60 from-black/90 to-transparent z-10 h-60 w-56 transition-all duration-500"></div>
      </li>
    );
  });

  return (
    <ul className="flex gap-6 justify-center h-60">{categoryListItems}</ul>
  );
};

export const HomeFoodCategorySection = () => {
  return (
    <SectionWrapper styles="pb-16">
      <PageWrapper>
        <header className="text-center mb-10">
          <p className="great-vibes text-orange-400 text-2xl ">Food Category</p>
          <h1 className="text-5xl font-bold mt-2 mb-5">
            <span className="text-orange-400">Choose </span>
            Food Item
          </h1>
        </header>

        <FoodCategoriesList />
      </PageWrapper>
    </SectionWrapper>
  );
};
