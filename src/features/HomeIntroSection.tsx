import { SectionWrapper } from "src/layouts/SectionWrapper";
import { PageWrapper } from "src/layouts/PageWrapper";
import { IconList } from "./IconList";
import introSectionBg from "src/assets/introSectionBg.png";
import { DescriptionLayout } from "src/layouts/DescriptionLayout";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "src/components/Link";
import HomeIntro from "src/assets/HomeIntro.png";
import { buttonVariants } from "src/styles/ButtonStyles";

export const HomeIntroSection = () => {
  const introSectionIcons = [
    <BiLogoFacebook size={20} />,
    <AiOutlineTwitter size={20} />,
    <BiLogoPinterestAlt size={20} />,
  ];

  return (
    <SectionWrapper styles="bg-bottom bg-cover pt-16" bgImg={introSectionBg}>
      <div className="bg-black/90">
        <PageWrapper styles="flex justify-between items-center relative py-16">
          <IconList
            icons={introSectionIcons}
            listItemStyles="mx-0 my-2"
            listStyles="flex-col bg-black absolute -left-2"
          />

          <DescriptionLayout
            cursiveText="It's Quick & Amusing!"
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
      </div>
    </SectionWrapper>
  );
};
