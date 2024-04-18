import { HomeIntroSection } from "src/containers/HomeIntroSection";
import { HomeAboutSection } from "src/containers/HomeAboutSection";
import { HomeFoodCategorySection } from "src/containers/HomeFoodCategorySection";
import { HomeWhyUsSection } from "src/containers/HomeWhyUsSection";
import { StatisticListSection } from "src/containers/StatisticListSection";

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
