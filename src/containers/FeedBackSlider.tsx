import { Wrapper } from "./layouts/Wrapper";
import { FeedBackCard } from "./features/FeedBackCard";
import { Slider } from "./features/Slider";

import { comments } from "src/constants";

import FeedBackSliderFlower from "src/assets/decorations/feedBackSliderFlowers.png";

export const FeedBackSlider = () => {
  const feedbackCards = comments.map((feedback) => {
    return (
      <FeedBackCard
        key={feedback.userName}
        avatar={feedback.avatar}
        comment={feedback.comment}
        userName={feedback.userName}
      />
    );
  });

  return (
    <Wrapper wrapStyles="flex flex-col relative">
      <div className="mb-10">
        <p className=" text-xl great-vibes text-orange-400">Testimonials</p>
        <h2 className="font-semibold text-4xl">What Our Clients are saying</h2>
      </div>

      <Slider
        listStyles="w-[60%] self-center z-20"
        list={feedbackCards}
        isDotted={true}
        arrows={true}
      />

      <img
        className="absolute top-20"
        src={FeedBackSliderFlower}
        alt="decoration flowers"
      />
    </Wrapper>
  );
};
