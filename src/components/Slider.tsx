import SliderSlick from "react-slick";

import { TImageInfo } from "src/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface SliderProps {
  list: TImageInfo[];
  isDotted?: boolean;
  // rightArrow?: React.ReactNode;
  // leftArrow?: React.ReactNode;
}

export const Slider = ({
  list,
  isDotted = false,
  // rightArrow,
  // leftArrow,
}: SliderProps) => {
  const sliderOptions = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: isDotted,
    customPaging: isDotted
      ? () => (
          <div className="bg-gray-100 w-1.5 h-1.5 opacity-40 rounded-full"></div>
        )
      : undefined,
    appendDots: isDotted
      ? (dots: React.ReactNode) => (
          <div className="pt-12">
            <ul>{dots}</ul>
          </div>
        )
      : undefined,
  };

  const slides = list.map((item) => {
    return (
      <li key={item.info}>
        <img className="w-60" src={item.img} alt={item.info} />
        <p className="bg-gray-100 text-black p-4 text-center font-semibold text-lg rounded-b w-60">
          {item.info}
        </p>
      </li>
    );
  });

  return (
    <ul className="w-[70%] mt-6 mb-10">
      <SliderSlick
        {...sliderOptions}
      >
        {slides}
      </SliderSlick>
    </ul>
  );
};
