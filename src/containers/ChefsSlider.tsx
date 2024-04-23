import { Link } from "react-router-dom";

import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { Slider } from "../components/Slider";

import { chefs } from "src/constants/chefs";
import { buttonVariants } from "src/styles/ButtonStyles";

export const ChefsSlider = () => {
  return (
    <PageWrapper>
      <section className="py-16 flex flex-col items-center">
        <div className="text-center">
          <p className="great-vibes text-orange-400 text-2xl">Chefs</p>
          <h2 className="text-5xl font-bold mt-3 mb-6">
            <span className="text-orange-400">Meet</span> Our Chefs
          </h2>
        </div>

        <Slider list={chefs} />

        <Link
          className={buttonVariants({
            variant: "outlined",
            rounded: "full",
            size: "lg",
          })}
          to="/chefs"
        >
          See More
        </Link>
      </section>
    </PageWrapper>
  );
};
