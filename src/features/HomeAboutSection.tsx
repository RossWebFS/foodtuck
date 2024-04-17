import { SectionWrapper } from "src/layouts/SectionWrapper";
import { PageWrapper } from "src/layouts/PageWrapper";
import { DescriptionLayout } from "src/layouts/DescriptionLayout";
import { BsCheck } from "react-icons/bs";
import { Link } from "src/components/Link";
import HomeAbout1 from "src/assets/HomeAbout1.png";
import HomeAbout2 from "src/assets/HomeAbout2.png";
import HomeAbout3 from "src/assets/HomeAbout3.png";
import { buttonVariants } from "src/styles/ButtonStyles";

interface AboutSectionListItemProps {
  content: string;
}

const AboutSectionListItem = ({ content }: AboutSectionListItemProps) => {
  return (
    <li className="flex my-2">
      <BsCheck size={25} />
      <p className="pl-3">{content}</p>
    </li>
  );
};

export const HomeAboutSection = () => {
  return (
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
  );
};
