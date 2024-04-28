import { RiSearchLine } from "react-icons/ri";
import { navRoutes, dishes, foodCategories } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { SearchInput } from "src/containers/features/SearchInput";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { iconVariants } from "src/styles/IconStyles";
import { formPrice } from "src/utils";
import { TESelect } from "tw-elements-react";

export const ShopPage = () => {
  const links = [navRoutes.HOME, navRoutes.SHOP];

  const shopItems = dishes.map((dish) => {
    return (
      <li className="w-[30%]">
        <img src={dish.img} alt={dish.title} />
        <div className="w-2/5">
          <h5 className="text-lg font-semibold my-1">{dish.title}</h5>
          <span className="text-orange-400 text-lg">
            $
            {dish.saledPrice
              ? formPrice(dish.saledPrice)
              : formPrice(dish.basicPrice)}
          </span>
          {dish.saledPrice && (
            <span className="text-gray-500 ml-2">
              <del>${formPrice(dish.basicPrice)}</del>
            </span>
          )}
        </div>
      </li>
    );
  });

  const categoryCheckboxes = foodCategories.map((category) => {
    return (
      <li className="flex my-2 items-center">
        <input
          id={`${category}-checkbox`}
          type="checkbox"
          className=" mr-2 w-4 h-4"
        />
        <label htmlFor={`${category}-checkbox`}></label>
        {category}
      </li>
    );
  });

  return (
    <main className="pt-20">
      <PageIntro links={links} title="Our Shop" />

      <Wrapper wrapStyles="pt-20">
        <section className="flex items-center py-8 gap-10">
          <div className="flex items-center">
            <label htmlFor="#request-filter">Sort by:</label>
            <TESelect
              id="request-filter"
              data={[
                { text: "Newest", value: "newest" },
                { text: "Popular", value: "popular" },
              ]}
              className="w-64 ml-2"
              placeholder="Newest"
              multiple
              clearBtn
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="#request-filter">Show:</label>
            <TESelect
              id="request-filter"
              data={[
                { text: "Newest", value: "newest" },
                { text: "Popular", value: "popular" },
              ]}
              className="w-64 ml-2"
              placeholder="Default"
              multiple
              clearBtn
            />
          </div>
        </section>

        <section className="flex">
          <ul className="flex flex-wrap w-3/4 gap-5">{shopItems}</ul>
          <section>
            <SearchInput
              IconComponent={RiSearchLine}
              type="text"
              placeholder="Search..."
              inputStyles="text-gray-500 bg-orange-100 focus:bg-white focus:border focus:border-orange-400 focus:py-[7px] focus:px-[15.5px]"
              iconStyles={
                iconVariants({ variant: "boxed" }) +
                "w-10 h-10 p-3 hover:bg-orange-500 hover:text-gray-100"
              }
            />

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Category</h2>
              <ul>{categoryCheckboxes}</ul>
            </div>
          </section>
        </section>
      </Wrapper>
    </main>
  );
};
