import { HomeIntroSection } from "src/containers/HomeIntro";
import { HomeAboutSection } from "src/containers/HomeAbout";
import { HomeFoodCategorySection } from "src/containers/HomeFoodCategories";
import { HomeWhyUsSection } from "src/containers/HomeWhyUs";
import { StatisticList } from "src/containers/StatisticList";
import { FoodCategoryFilter } from "src/containers/FoodCategoryFilter";
import { ChefsSlider } from "src/containers/ChefsSlider";
import { FeedBackSlider } from "src/containers/FeedBackSlider";
import { Activity } from "src/containers/Activity";
import { RecentBlogList } from "src/containers/RecentBlogList";

import BreakfastCategory from "src/assets/products/BreackfastCategory.png";
import { useProductStore } from "src/store/ProductStore";
import { useEffect } from "react";

export const HomePage = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main className="text-gray-100 bg-black">
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeFoodCategorySection />
      <HomeWhyUsSection />
      <StatisticList />
      <FoodCategoryFilter img={BreakfastCategory} />
      <ChefsSlider />
      <FeedBackSlider />
      <Activity />
      <RecentBlogList />
    </main>
  );
};
