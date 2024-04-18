import { PageSectionImageWrapper } from "src/containers/layouts/PageSectionImageWrapper";
import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { IconList } from "./features/IconList";
import { DescriptionLayout } from "src/containers/features/DescriptionLayout";
import { Link } from "src/components/Link";

import introSectionBg from "src/assets/introSectionBg.png";
import HomeIntro from "src/assets/HomeIntro.png";

import { introSectionIcons } from "src/constants";
import { buttonVariants } from "src/styles/ButtonStyles";

export const HomeIntroSection = () => {
  return (
    <PageSectionImageWrapper
      imageStyles="bg-bottom bg-cover pt-16"
      bgImg={introSectionBg}
      imageFilter="bg-black/90"
    >
      <PageWrapper wrapStyles="flex justify-between items-center relative py-16">
        <IconList
          icons={introSectionIcons}
          iconStyles="w-5 h-5"
          listItemStyles="mx-0 my-4"
          listStyles="flex-col bg-black absolute -left-2"
        />

        <DescriptionLayout
          highlightedText="It's Quick & Amusing!"
          title=" Art of speed food Quality"
          coloredText="The"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              unde facere consectetur dolor iure soluta"
          styles="pl-12 border-l border-gray-100"
          contentWidth="w-10/12"
        >
          <Link
            className={buttonVariants({
              variant: "outlined",
              rounded: "full",
              size: "lg",
            })}
            path="/menu"
          >
            See Menu
          </Link>
        </DescriptionLayout>

        <section className="w-7/12">
          <img src={HomeIntro} alt="dish" />
        </section>
      </PageWrapper>
    </PageSectionImageWrapper>
  );
};
