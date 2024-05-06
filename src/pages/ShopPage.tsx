import { Link } from "src/components/Link";
import { TESelect } from "tw-elements-react";

import { Icon } from "src/components/Icon";
import { PageIntro } from "src/containers/features/PageIntro";
import { SearchInputModal } from "src/containers/features/SearchInputModal";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { MultiRange } from "src/containers/features/MultiRange";
import { Pagination } from "src/containers/features/Pagination";
import { ProductTags } from "src/containers/features/ProductTags";
import { LatestDishList } from "src/containers/features/LatestDishList";
import { CategoryCheckboxList } from "src/containers/features/CategoryCheckboxList";
import { ProductList } from "src/containers/features/ProductList";

import { RiSearchLine } from "react-icons/ri";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import {
  foodCategories,
  latestDishes,
  routes,
} from "src/constants";
import { iconVariants } from "src/styles/IconStyles";
import { formPrice } from "src/utils";

export const ShopPage = () => {
  const links = [routes.HOME, routes.SHOP];

  return (
    <main className="py-20">
      <PageIntro links={links} title="Our Shop" />

      <Wrapper wrapStyles="pt-20 max-w-[1100px]">
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
              data={[{ text: "Default", value: "default" }]}
              className="w-64 ml-2"
              placeholder="Default"
              multiple
              clearBtn
              onClick={(e) => console.log(e)}
            />
          </div>
        </section>

        <section className="flex">
          <section>
            <ProductList/>
            <Pagination />
          </section>
          <section className="w-[30%] border border-gray-200 p-6 rounded-lg">
            <SearchInputModal
              setActiveModal={() => {}}
              IconComponent={RiSearchLine}
              type="text"
              placeholder="Search..."
              inputStyles="text-gray-500 bg-orange-100 focus:bg-white focus:border focus:border-orange-400 focus:py-[7px] focus:px-[15.5px]"
              iconStyles={
                iconVariants({ variant: "boxed" }) +
                "w-10 h-10 p-3 hover:bg-orange-500 hover:text-gray-100"
              }
            />

            <div className="my-6">
              <h4 className="font-semibold text-xl mb-4">Category</h4>
              <CategoryCheckboxList categories={foodCategories} />
            </div>

            <div className="bg-[url('src/assets/products/ShopAd.png')] w-56 h-64 bg-cover text-gray-100 font-semibold flex flex-col justify-between px-5 py-7">
              <div>
                <p>Perfect Taste</p>
                <h4 className="text-lg mt-1 mb-2">Classic Reastaurant</h4>
                <span className="text-orange-400">${formPrice(45)}</span>
              </div>
              <Link to="/cart">
                Shop Now
                <Icon
                  IconComponent={IoArrowForwardCircleOutline}
                  className="w-5 h-5 ml-2"
                  variant="light"
                />
              </Link>
            </div>

            <div className="mt-4 mb-6">
              <h4 className="font-semibold text-xl mb-4">Filter By Price</h4>
              <MultiRange />
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-xl mb-4">Latest Products</h4>
              <LatestDishList dishes={latestDishes} />
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-4">Product Tags</h4>
              <ProductTags />
            </div>
          </section>
        </section>
      </Wrapper>
    </main>
  );
};
