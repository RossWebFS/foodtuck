import { BreadCrumbs } from "src/containers/features/BreadCrumbs";
import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";

import { TRoute } from "src/types";

import PageIntroBackground from "src/assets/backgrounds/PageIntroBackground.png";

interface PageIntroProps {
  title: string;
  links: TRoute[];
}

export const PageIntro = ({ title, links }: PageIntroProps) => {
  return (
    <BackgroundImageWrapper
      imageStyles="bg-cover bg-bottom"
      bgImg={PageIntroBackground}
    >
      <section className="h-72 flex flex-col text-gray-100 justify-center items-center mb-10">
        <h1 className="font-semibold text-5xl mb-5">{title}</h1>
        <BreadCrumbs listItems={links} />
      </section>
    </BackgroundImageWrapper>
  );
};
