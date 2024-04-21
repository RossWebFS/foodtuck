import { PageSectionImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { PageWrapper } from "src/containers/layouts/PageWrapper";

import HomeStatisticBackground from "src/assets/backgrounds/HomeStatisticBackground.png";

import { statisticListItems } from "src/constants";

export const StatisticListSection = () => {
  const statisticlist = statisticListItems.map((item) => {
    return (
      <li key={item.alt} className="text-center font-semibold">
        <img src={item.img} alt={item.alt} />
        <p className="my-4">{item.content}</p>
        <span className="text-3xl">{item.count}</span>
      </li>
    );
  });

  return (
    <PageSectionImageWrapper
      bgImg={HomeStatisticBackground}
      imageStyles="bg-cover"
    >
      <div className="bg-black/75">
        <PageWrapper>
          <ul className="flex justify-around py-10">{statisticlist}</ul>
        </PageWrapper>
      </div>
    </PageSectionImageWrapper>
  );
};
