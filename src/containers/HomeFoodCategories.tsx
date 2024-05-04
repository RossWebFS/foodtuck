import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { FoodCategoryList } from "./features/FoodCategoryList";

import { foodCategoryCards } from "src/constants";

export const HomeFoodCategorySection = () => {

  return (
    <BackgroundImageWrapper imageFilter="pb-16">
      <Wrapper>
        <header className="text-center mb-10">
          <p className="great-vibes text-orange-400 text-2xl ">Food Category</p>
          <h1 className="text-5xl font-bold mt-2 mb-5">
            <span className="text-orange-400">Choose </span>
            Food Item
          </h1>
        </header>
        <FoodCategoryList foodCards={foodCategoryCards}/>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
