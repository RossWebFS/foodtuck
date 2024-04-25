import { HomeIntroSection } from "src/containers/HomeIntro";
import { HomeAboutSection } from "src/containers/HomeAbout";
import { HomeFoodCategorySection } from "src/containers/HomeFoodCategories";
import { HomeWhyUsSection } from "src/containers/HomeWhyUs";
import { StatisticListSection } from "src/containers/StatisticList";
import { FoodCategoryFilter } from "src/containers/FoodCategoryFilter";
import { ChefsSlider } from "src/containers/ChefsSlider";
import { FeedBackSlider } from "src/containers/FeedBackSlider";

export const HomePage = () => {
  return (
    <main className="text-gray-100 bg-black">
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeFoodCategorySection />
      <HomeWhyUsSection />
      <StatisticListSection />
      <FoodCategoryFilter />
      <ChefsSlider />
      <FeedBackSlider />
    </main>
  );
};
