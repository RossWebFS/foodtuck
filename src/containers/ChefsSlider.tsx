import { Link } from "react-router-dom";

import { Wrapper } from "src/containers/layouts/Wrapper";
import { Slider } from "./features/Slider";

import { chefs } from "src/constants";
import { buttonVariants } from "src/styles/ButtonStyles";

import ChefDill from "src/assets/decorations/ChefsDill.png";

export const ChefsSlider = () => {
  const slides = chefs.map((item) => {
    return (
      <li className="w-60" key={item.info}>
        <img className="w-60 mx-auto" src={item.img} alt={item.info} />
        <p className="bg-gray-100 text-black p-4 text-center font-semibold text-lg rounded-b w-60 mx-auto">
          {item.info}
        </p>
      </li>
    );
  });

  return (
    <Wrapper wrapStyles="py-16 flex flex-col items-center relative">
      <div className="text-center">
        <p className="great-vibes text-orange-400 text-2xl">Chefs</p>
        <h2 className="text-5xl font-bold mt-3 mb-6">
          <span className="text-orange-400">Meet</span> Our Chefs
        </h2>
      </div>

      <Slider
        list={slides}
        className="w-[70%] z-20"
        arrows={true}
        visibleSlideCount={3}
      />
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

      <img
        className="absolute -left-44 top-28 z-0"
        src={ChefDill}
        alt="decoration dill"
      />
    </Wrapper>
  );
};
