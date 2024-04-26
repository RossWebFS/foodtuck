import { BreadCrumbs } from "src/components/BreadCrumbs";
import { BackgroundImageWrapper } from "../layouts/BackgroundImageWrapper";

import PageIntroBackground from "src/assets/backgrounds/PageIntroBackground.png";
import { TRoutes } from "src/types";

interface PageIntroProps {
  title: string;
  links: TRoutes[];
}

export const PageIntro = ({ title, links }: PageIntroProps) => {
  return (
    <BackgroundImageWrapper
      imageStyles="bg-cover bg-bottom"
      bgImg={PageIntroBackground}
    >
      <section className="h-72 bg flex flex-col justify-center items-center">
        <h1 className="font-semibold text-5xl mb-5">{title}</h1>
        <BreadCrumbs listItems={links} />
      </section>
    </BackgroundImageWrapper>
  );
};
