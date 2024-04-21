import { HomeIntroSection } from "src/containers/HomeIntro";
import { HomeAboutSection } from "src/containers/HomeAbout";
import { HomeFoodCategorySection } from "src/containers/HomeFoodCategories";
import { HomeWhyUsSection } from "src/containers/HomeWhyUs";
import { StatisticListSection } from "src/containers/StatisticList";

export const HomePage = () => {
  return (
    <main className="text-gray-100 bg-black">
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeFoodCategorySection
        cursiveText="Food Category"
        highlightedText="Choose "
        title="Food Item"
      />
      <HomeWhyUsSection />
      <StatisticListSection />
    </main>
  );
};
