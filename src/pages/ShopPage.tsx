import { Link } from "src/components/Link";
import { Icon } from "src/components/Icon";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { MultiRange } from "src/containers/features/MultiRange";
import { Pagination } from "src/containers/features/Pagination";
import { ProductTags } from "src/containers/features/ProductTags";
import { LatestDishList } from "src/containers/features/LatestDishList";
import { CategoryCheckboxList } from "src/containers/features/CategoryCheckboxList";
import { ProductList } from "src/containers/features/ProductList";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { foodCategories, routes } from "src/constants";
import { formPrice } from "src/utils";
import { FilterInput } from "src/containers/features/FilterInput";
import { useProductStore } from "src/hooks/ProductStore";
import { SelectProductFilter } from "src/containers/features/SelectProductFilter";
import { useEffect, useState } from "react";
import { TFilterObject } from "src/types";

export const ShopPage = () => {
  const links = [routes.HOME, routes.SHOP];
  const [products, cart, wishList] = useProductStore((state) => [
    state.products,
    state.cart,
    state.wishList,
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState<TFilterObject>({
    preferred: [],
    calories: [],
    search: "",
    categories: [],
    price: [0, 100],
    tag: "Select All",
    pagination: 1,
  });

  useEffect(() => {
    filterProducts(filters);
  }, [filters]);

  const filterProducts = (filter: TFilterObject) => {
    const filteredData = products.filter((item) => {
      const isInCart =
        filter.preferred.includes("cart") &&
        cart.some((dish) => dish.title === item.title);
      const isInWishList =
        filter.preferred.includes("wishList") &&
        wishList.some((dish) => dish.title === item.title);

      const filterLowCaloried =
        filter.calories.includes("low") && item.calories < 300 && item;
      const filterMiddleCaloried =
        filter.calories.includes("middle") &&
        item.calories >= 300 &&
        item.calories <= 600 &&
        item;
      const filterHighCaloried =
        filter.calories.includes("high") && item.calories > 600 && item;

      const value = filter.search.toLowerCase();
      const filteredBySearch =
        item.title.toLowerCase().includes(value) ||
        item.tags.join(" ").toLowerCase().includes(value);

      const categoryFilter = filter.categories.filter((category) =>
        item.category.includes(category)
      );

      const priceFilter =
        item.price >= filters.price[0] && item.price <= filter.price[1];

      const tagFilter = item.tags.filter((tag) => filter.tag.includes(tag));

      return (
        (isInCart || isInWishList || !filter.preferred.length) &&
        (filterLowCaloried ||
          filterMiddleCaloried ||
          filterHighCaloried ||
          !filter.calories.length) &&
        filteredBySearch &&
        (categoryFilter.length || (!filter.categories.length && item)) &&
        priceFilter &&
        (tagFilter.length || filter.tag === "Select All")
      );
    });

    setFilteredProducts(filteredData);
  };

  return (
    <main className="py-20">
      <PageIntro links={links} title="Our Shop" />

      <Wrapper wrapStyles="pt-20 max-w-[1100px]">
        <SelectProductFilter filter={filters} filterHandler={setFilters} />

        <section className="flex">
          <section className="w-[70%]">
            <ProductList products={filteredProducts} />

            {/* <Pagination products={filteredProducts} /> */}
          </section>
          <section className="w-[30%] border border-gray-200 p-6 rounded-lg">
            <FilterInput filter={filters} filterHandler={setFilters} />

            <div className="my-6">
              <h4 className="font-semibold text-xl mb-4">Category</h4>
              <CategoryCheckboxList
                categories={foodCategories}
                filter={filters}
                filterHandler={setFilters}
              />
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
              <MultiRange filter={filters} filterHandler={setFilters} />
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-xl mb-4">Latest Products</h4>
              <LatestDishList dishes={products.slice(0, 4)} />
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-4">Product Tags</h4>
              <ProductTags filter={filters} filterHandler={setFilters} />
            </div>
          </section>
        </section>
      </Wrapper>
    </main>
  );
};
