import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { IconList } from "./features/IconList";
import { Description } from "src/containers/features/Description";
import { Link } from "src/components/Link";

import introSectionBg from "src/assets/backgrounds/introSectionBg.png";
import HomeIntro from "src/assets/products/HomeIntro.png";

import { introSectionIcons } from "src/constants";
import { buttonVariants } from "src/styles/ButtonStyles";

export const HomeIntroSection = () => {
  return (
    <BackgroundImageWrapper
      imageStyles="bg-bottom bg-cover pt-16"
      bgImg={introSectionBg}
      imageFilter="bg-black/90"
    >
      <Wrapper wrapStyles="flex justify-between items-center relative py-16">
        <IconList
          icons={introSectionIcons}
          iconStyles="w-5 h-5"
          listItemStyles="mx-0 my-4"
          listStyles="flex-col bg-black absolute -left-2"
        />

        <Description
          highlightedText="It's Quick & Amusing!"
          title=" Art of speed food Quality"
          coloredText="The"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              unde facere consectetur dolor iure soluta"
          styles="pl-12 border-l border-gray-100"
          contentWidth="w-10/12"
        >
          <Link variant="outlined" size="lg" rounded="full" to="/menu">
            See Menu
          </Link>
        </Description>

        <section className="w-7/12">
          <img src={HomeIntro} alt="dish" />
        </section>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
