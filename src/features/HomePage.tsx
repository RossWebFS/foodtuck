import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { buttonVariants } from "src/styles/ButtonStyles";

import { IconList } from "src/components/IconList";
import { PageWrapper } from "src/layout/PageWrapper";
import { SectionWrapper } from "src/layout/SectionWrapper";
import { DescriptionLayout } from "src/layout/DescriptionLayout";

import introSectionBg from "src/assets/introSectionBg.png";
import HomeIntro from "src/assets/HomeIntro.png";
import HomeAbout1 from "src/assets/HomeAbout1.png";
import HomeAbout2 from "src/assets/HomeAbout2.png";
import HomeAbout3 from "src/assets/HomeAbout3.png";

interface AboutSectionListItemProps {
  content: string;
}

export const HomePage = () => {
  const introSectionIcons: React.ReactNode[] = [
    <BiLogoFacebook size={20} />,
    <AiOutlineTwitter size={20} />,
    <BiLogoPinterestAlt size={20} />,
  ];

  return (
    <main className="text-gray-100 bg-black">
      <SectionWrapper styles="bg-bottom bg-cover" bgImg={introSectionBg}>
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
                to="/menu"
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

      <SectionWrapper styles="bg-black pt-16 pb-8">
        <PageWrapper styles="flex justify-evenly items-center">
          <DescriptionLayout
            styles="w-2/5"
            cursiveText="About Us"
            coloredText="We"
            title=" Create the best foody product"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
            voluptatem excepturi, nemo placeat autem iste necessitatibus minus
            unde voluptatibus!"
            contentWidth="w-11/12"
          >
            <ul className="mb-8">
              <AboutSectionListItem content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              <AboutSectionListItem
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi."
              />
              <AboutSectionListItem content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </ul>

            <Link
              to="/about"
              className={
                buttonVariants({
                  variant: "outlined",
                  rounded: "full",
                  size: "lg",
                }) + " hover-"
              }
            >
              Read more
            </Link>
          </DescriptionLayout>

          <section className="w-5/12 grid gap-3 grid-cols-2 box-border">
            <img
              className="object-contain w-full col-span-2"
              src={HomeAbout1}
              alt="dish"
            />
            <img className="object-contain" src={HomeAbout2} alt="dish" />
            <img className="object-contain" src={HomeAbout3} alt="dish" />
          </section>
        </PageWrapper>
      </SectionWrapper>
    </main>
  );
};

const AboutSectionListItem = ({ content }: AboutSectionListItemProps) => {
  return (
    <li className="flex my-2">
      <BsCheck size={25} />
      <p className="pl-3">{content}</p>
    </li>
  );
};
