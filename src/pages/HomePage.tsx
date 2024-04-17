import { HomeIntroSection } from "src/features/HomeIntroSection";
import { HomeAboutSection } from "src/features/HomeAboutSection";
import { HomeFoodCategorySection } from "src/features/HomeFoodCategorySection";
import { HomeWhyUsSection } from "src/features/HomeWhyUsSection";

import { SectionWrapper } from "src/layouts/SectionWrapper";
import { PageWrapper } from "src/layouts/PageWrapper";
import HomeStatisticBackground from "src/assets/HomeStatisticBackground.png"

import HomeStatisticsIcon1 from "src/assets/HomeStatisticsIcon1.png";
import HomeStatisticsIcon2 from "src/assets/HomeStatisticsIcon2.png";
import HomeStatisticsIcon3 from "src/assets/HomeStatisticsIcon3.png";
import HomeStatisticsIcon4 from "src/assets/HomeStatisticsIcon4.png";

export const HomePage = () => {
  return (
    <main className="text-gray-100 bg-black">
      <HomeIntroSection />

      <HomeAboutSection />

      <HomeFoodCategorySection />

      <HomeWhyUsSection />

      <SectionWrapper bgImg={HomeStatisticBackground} styles="bg-cover">
        <div className="bg-black/75">
          <PageWrapper>
            <ul className="flex justify-around py-10">
              <li className="text-center font-semibold">
                <img src={HomeStatisticsIcon1} alt="" />
                <p className="my-4">Professional Chefs</p>
                <span className="text-3xl">30</span>
              </li>
              <li className="text-center font-semibold">
                <img src={HomeStatisticsIcon2} alt="" />
                <p className="my-4">Items Of Food</p>
                <span className="text-3xl">320</span>
              </li>
              <li className="text-center font-semibold">
                <img src={HomeStatisticsIcon3} alt="" />
                <p className="my-4">Years Of Experienced</p>
                <span className="text-3xl">30+</span>
              </li>
              <li className="text-center font-semibold">
                <img src={HomeStatisticsIcon4} alt="" />
                <p className="my-4">Professional Chefs</p>
                <span className="text-3xl">220</span>
              </li>
            </ul>
          </PageWrapper>
        </div>
      </SectionWrapper>
    </main>
  );
};
