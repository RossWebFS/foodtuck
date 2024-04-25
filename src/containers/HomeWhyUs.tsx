import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { Description } from "src/containers/features/Description";

import { Icon } from "src/components/Icon";

import { foodCategoryIcons, whyUsImages } from "src/constants";

export const HomeWhyUsSection = () => {
  const categoryItems = foodCategoryIcons.map((category) => {
    return (
      <li key={category.category} className="text-center">
        <Icon
          IconComponent={category.icon}
          variant="boxed"
          className="p-5 mb-1 w-24 h-24"
        />
        <span>{category.category}</span>
      </li>
    );
  });

  return (
    <PageWrapper wrapStyles="flex justify-evenly items-center py-16">
      <section className="w-1/2">
        <div className="grid grid-cols-2 items-end gap-4 mb-4">
          <img className="w-[23rem]" src={whyUsImages.img1} alt="dish 1" />
          <img className="w-[17rem]" src={whyUsImages.img2} alt="dish 2" />
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <img
            className="row-span-2 w-[15rem]"
            src={whyUsImages.img3}
            alt="dish 3"
          />
          <img
            className="row-span-2 w-[14rem]"
            src={whyUsImages.img4}
            alt="dish 4"
          />
          <img className="w-40" src={whyUsImages.img5} alt="dish 5" />
          <img className="w-40" src={whyUsImages.img6} alt="dish 6" />
        </div>
      </section>

      <Description
        highlightedText="Why Choose Us"
        coloredText="Extra"
        title=" ordinary taste And Experienced"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
              voluptatem excepturi, nemo placeat autem iste necessitatibus minus
              unde voluptatibus!"
      >
        <ul className="flex gap-8">{categoryItems}</ul>

        <div className="flex justify-evenly bg-gray-100 w-4/5 p-3 box-content mt-6 rounded border-l-8 border-l-orange-400">
          <span className="text-5xl font-bold text-orange-400 pt-1">30+</span>
          <p>
            <p className="text-black text-lg leading-5">Years of</p>
            <span className="text-black text-xl font-bold">Experience</span>
          </p>
        </div>
      </Description>
    </PageWrapper>
  );
};
