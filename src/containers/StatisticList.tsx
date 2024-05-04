import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Wrapper } from "src/containers/layouts/Wrapper";

import { statisticCards } from "src/constants";

import HomeStatisticBackground from "src/assets/backgrounds/HomeStatisticBackground.png";

export const StatisticList = () => {
  const statisticListItems = statisticCards.map((card) => {
    return (
      <li key={card.alt} className="text-center font-semibold">
        <img src={card.img} alt={card.alt} />
        <p className="my-4">{card.content}</p>
        <span className="text-3xl">{card.count}</span>
      </li>
    );
  });

  return (
    <BackgroundImageWrapper
      bgImg={HomeStatisticBackground}
      imageStyles="bg-cover"
      imageFilter="bg-black/75"
    >
      <Wrapper>
        <ul className="flex justify-around py-10 my-10 text-gray-100">
          {statisticListItems}
        </ul>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
