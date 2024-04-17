import { SectionWrapper } from "src/layouts/SectionWrapper";
import { PageWrapper } from "src/layouts/PageWrapper";
import { DescriptionLayout } from "src/layouts/DescriptionLayout";
import WhyUsHome1 from "src/assets/WhyUsHome1.png";
import WhyUsHome2 from "src/assets/WhyUsHome2.png";
import WhyUsHome3 from "src/assets/WhyUsHome3.png";
import WhyUsHome4 from "src/assets/WhyUsHome4.png";
import WhyUsHome5 from "src/assets/WhyUsHome5.png";
import WhyUsHome6 from "src/assets/WhyUsHome6.png";
import { PiHamburgerLight, PiCookieLight, PiWineLight } from "react-icons/pi";
import { Icon } from "src/components/Icon";

export const HomeWhyUsSection = () => {
  return (
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
            <span className="text-5xl font-bold text-orange-400 pt-1">30+</span>
            <p>
              <p className="text-black text-lg leading-5">Years of</p>
              <span className="text-black text-xl font-bold">Experience</span>
            </p>
          </div>
        </DescriptionLayout>
      </PageWrapper>
    </SectionWrapper>
  );
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
        <Icon variant="boxed" className="p-5 mb-1">
          {c.icon}
        </Icon>
        <span>{c.category}</span>
      </li>
    );
  });

  return <ul className="flex gap-8">{categoryItems}</ul>;
};
