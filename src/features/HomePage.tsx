import React from "react";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

import { PageWrapper } from "src/layout/PageWrapper";
import { IntroSection } from "src/layout/IntroSection";
import { OutlinedLink } from "src/components/OutlinedLink";
import { Icon } from "src/components/Icon";

import introSectionBg from "src/assets/introSectionBg.png";
import HomeIntro from "src/assets/HomeIntro.png";

export const HomePage: React.FC = () => {
  return (
    <main className="text-gray-100">
      <IntroSection bgImg={introSectionBg}>
        <div className="bg-black opacity-80">
          <PageWrapper styles="flex justify-between items-center relative">
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
              <p className="mb-4">
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
    </main>
  );
};
