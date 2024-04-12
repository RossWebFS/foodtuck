import React from "react";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

import { PageWrapper } from "src/layout/PageWrapper";
import { IntroSection } from "src/layout/IntroSection";
import { OutlinedLink } from "src/components/OutlinedLink";
import { Icon } from "src/components/Icon";

import introSectionBg from "src/assets/introSectionBg.png";
import HomeIntro from "src/assets/HomeIntro.png";
import HomeAbout1 from "src/assets/HomeAbout1.png";
import HomeAbout2 from "src/assets/HomeAbout2.png";
import HomeAbout3 from "src/assets/HomeAbout3.png";

export const HomePage: React.FC = () => {
  return (
    <main className="text-gray-100">
      <IntroSection styles="bg-bottom bg-cover" bgImg={introSectionBg}>
        <div className="bg-black/90">
          <PageWrapper styles="flex justify-between items-center relative py-16">
            <ul className="bg-black absolute -left-2">
              <Icon styles="my-3">
                <BiLogoFacebook size={20} />
              </Icon>
              <Icon styles="my-3">
                <AiOutlineTwitter size={20} />
              </Icon>
              <Icon styles="my-3">
                <BiLogoPinterestAlt size={20} />
              </Icon>
            </ul>

            <section className="w-1/3 pl-12 border-l border-gray-100">
              <p className="great-vibes text-orange-400 text-2xl ">
                It's Quick & Amusing!
              </p>
              <h1 className="text-5xl font-bold mt-2 mb-5">
                <span className="text-orange-400">The</span> Art of speed food
                Quality
              </h1>
              <p className="mb-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                unde facere consectetur dolor iure soluta quis reprehenderit
                adipisci incidunt molestias!
              </p>
              <OutlinedLink path="/menu">See Menu</OutlinedLink>
            </section>

            <section className="w-1/2">
              <img src={HomeIntro} alt="dish" />
            </section>
          </PageWrapper>
        </div>
      </IntroSection>

      <IntroSection styles="bg-black pt-16 pb-8">
        <PageWrapper styles="flex justify-evenly items-center">
          <section className="w-5/12 pl-12">
            <p className="great-vibes text-orange-400 text-2xl ">About Us</p>
            <h1 className="w-4/5 text-4xl font-bold mt-2 mb-5">
              <span className="text-orange-400">We</span> Create the best foody
              product
            </h1>
            <p className="mb-4 w-11/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
              voluptatem excepturi, nemo placeat autem iste necessitatibus minus
              unde voluptatibus!
            </p>

            <ul className="mb-8">
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi.
                </p>
              </li>
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
            <OutlinedLink path="/about">Read More</OutlinedLink>
          </section>

          <section className="w-5/12 grid gap-3 grid-cols-2 box-border">
            <img className="object-contain w-full col-span-2" src={HomeAbout1} alt="dish" />
            <img className="object-contain" src={HomeAbout2} alt="dish" />
            <img className="object-contain" src={HomeAbout3} alt="dish" />
          </section>
        </PageWrapper>
      </IntroSection>
    </main>
  );
};
