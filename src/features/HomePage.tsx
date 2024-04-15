import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { PiHamburgerLight, PiCookieLight, PiWineLight } from "react-icons/pi";
import { buttonVariants } from "src/styles/ButtonStyles";
import { foodCategories } from "src/constants";

import { Link } from "src/components/Link";
import { IconBox } from "src/components/Icon";
import { IconList } from "src/components/IconList";
import { PageWrapper } from "src/layout/PageWrapper";
import { SectionWrapper } from "src/layout/SectionWrapper";
import { DescriptionLayout } from "src/layout/DescriptionLayout";

import introSectionBg from "src/assets/introSectionBg.png";
import HomeIntro from "src/assets/HomeIntro.png";
import HomeAbout1 from "src/assets/HomeAbout1.png";
import HomeAbout2 from "src/assets/HomeAbout2.png";
import HomeAbout3 from "src/assets/HomeAbout3.png";
import WhyUsHome1 from "src/assets/WhyUsHome1.png";
import WhyUsHome2 from "src/assets/WhyUsHome2.png";
import WhyUsHome3 from "src/assets/WhyUsHome3.png";
import WhyUsHome4 from "src/assets/WhyUsHome4.png";
import WhyUsHome5 from "src/assets/WhyUsHome5.png";
import WhyUsHome6 from "src/assets/WhyUsHome6.png";

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
                styles={buttonVariants({
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

      <SectionWrapper styles="bg-black py-16 pb-8">
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
              path="/about"
              styles={
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

      <SectionWrapper styles="pb-16">
        <PageWrapper>
          <header className="text-center mb-10">
            <p className="great-vibes text-orange-400 text-2xl ">
              Food Category
            </p>
            <h1 className="text-5xl font-bold mt-2 mb-5">
              <span className="text-orange-400">Choose </span>
              Food Item
            </h1>
          </header>

          <FoodCategoriesList />
        </PageWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <PageWrapper styles="flex justify-evenly items-center py-16">
          <section className="w-1/2">
            <div className="grid grid-cols-2 items-end gap-4 mb-4">
              <img width={362 + "px"} src={WhyUsHome1} alt="dish 1" />
              <img width={270 + "px"} src={WhyUsHome2} alt="dish 1" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <img
                className="row-span-2"
                width={244 + "px"}
                src={WhyUsHome3}
                alt="dish 1"
              />
              <img
                className="row-span-2"
                width={221 + "px"}
                src={WhyUsHome4}
                alt="dish 1"
              />
              <img width={161 + "px"} src={WhyUsHome5} alt="dish 1" />
              <img width={161 + "px"} src={WhyUsHome6} alt="dish 1" />
            </div>
          </section>

          <DescriptionLayout
            cursiveText="Why Choose Us"
            coloredText="Extra"
            title=" ordinary taste And Experienced"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
              voluptatem excepturi, nemo placeat autem iste necessitatibus minus
              unde voluptatibus!"
          >
            <FoodCategoryIconList />

            <div className="flex justify-evenly bg-gray-100 w-4/5 p-3 box-content mt-6 rounded border-l-8 border-l-orange-400">
              <span className="text-5xl font-bold text-orange-400 pt-1">
                30+
              </span>
              <p>
                <p className="text-black text-lg leading-5">Years of</p>
                <span className="text-black text-xl font-bold">Experience</span>
              </p>
            </div>
          </DescriptionLayout>
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

const FoodCategoriesList = () => {
  const categoryListItems: React.ReactNode[] = foodCategories.map((c) => {
    return (
      <li className="group cursor-pointer relative overflow-hidden">
        <img
          className="w-56 h-60 rounded object-cover"
          src={`${c.src}`}
          alt={c.alt}
        />
        <Link
          rounded="default"
          variant="button"
          size="lg"
          path=""
          styles="duration-500 absolute top-44 -left-40 group-hover:left-0"
        >
          {c.buttonText}
        </Link>
      </li>
    );
  });

  return <ul className="flex gap-6 justify-center">{categoryListItems}</ul>;
};

const FoodCategoryIconList = () => {
  const categories: { category: string; icon: React.ReactNode }[] = [
    {
      category: "Fast Food",
      icon: <PiHamburgerLight size={50} />,
    },
    {
      category: "Lunch",
      icon: <PiCookieLight size={50} />,
    },
    {
      category: "Dinner",
      icon: <PiWineLight size={50} />,
    },
  ];

  const categoryItems: React.ReactNode = categories.map((c) => {
    return (
      <li className="text-center">
        <IconBox styles="p-5 mb-1">{c.icon}</IconBox>
        <span>{c.category}</span>
      </li>
    );
  });

  return <ul className="flex gap-8">{categoryItems}</ul>;
};
