import { HomeIntroSection } from "src/containers/HomeIntro";
import { HomeAboutSection } from "src/containers/HomeAbout";
import { HomeFoodCategorySection } from "src/containers/HomeFoodCategories";
import { HomeWhyUsSection } from "src/containers/HomeWhyUs";
import { StatisticListSection } from "src/containers/StatisticList";
import { FoodCategoryFilter } from "src/containers/FoodCategoryFilter";
import { ChefsSlider } from "src/containers/ChefsSlider";

import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    fetch("https://foodtuck-api-e276cb8c0038.herokuapp.com/category")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);


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
      <FoodCategoryFilter />
      <ChefsSlider />

      <PageWrapper>
        <div>
          <p className=" text-xl great-vibes text-orange-400">Testimonials</p>
          <h2 className="font-semibold text-4xl">
            What Our Clients are saying
          </h2>
        </div>
      </PageWrapper>
    </main>
  );
};
