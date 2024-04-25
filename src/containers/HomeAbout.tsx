import { Link } from "react-router-dom";

import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { Description } from "src/containers/features/Description";

import { BsCheck } from "react-icons/bs";

import HomeAbout1 from "src/assets/products/HomeAbout1.png";
import HomeAbout2 from "src/assets/products/HomeAbout2.png";
import HomeAbout3 from "src/assets/products/HomeAbout3.png";

import { buttonVariants } from "src/styles/ButtonStyles";

export const HomeAboutSection = () => {
  const listItemContent = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  ];

  const listItems = listItemContent.map((text) => {
    return (
      <li key={text} className="flex my-2">
        <BsCheck size={25} />
        <p className="pl-3">{text}</p>
      </li>
    );
  });

  return (
    <PageWrapper wrapStyles="flex justify-evenly items-center py-16 pb-8">
      <Description
        styles="w-2/5"
        highlightedText="About Us"
        coloredText="We"
        title=" Create the best foody product"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
            voluptatem excepturi, nemo placeat autem iste necessitatibus minus
            unde voluptatibus!"
        contentWidth="w-11/12"
      >
        <ul className="mb-8">{listItems}</ul>

        <Link
          to="/about"
          className={buttonVariants({
            variant: "outlined",
            rounded: "full",
            size: "lg",
          })}
        >
          Read more
        </Link>
      </Description>

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
  );
};
