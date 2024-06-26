import SliderSlick, { Settings } from "react-slick";
import { Icon } from "src/components/Icon";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { cn } from "src/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactSliderProps } from "react-slider";

interface SliderProps extends React.RefAttributes<Slider>, Settings {
  list: any[];
  visibleSlideCount?: number;
  isDotted?: boolean;
  arrows?: boolean;
  listStyles?: string;
  arrowStyles?: string;
  onClickR?: () => void;
  onClickL?: () => void;
}

interface CustomArrowProps {
  className?: string;
  onClick?: () => void;
  arrowStyles?: string;
}
interface CustomArrowRProps extends CustomArrowProps {
  onClickR?: () => void;
}
interface CustomArrowLProps extends CustomArrowProps {
  onClickL?: () => void;
}

export const SliderComponent = ({
  list,
  visibleSlideCount = 1,
  isDotted = false,
  arrows = false,
  listStyles,
  arrowStyles,
  ...props
}: SliderProps) => {
  const sliderOptions = {
    infinite: true,
    speed: 500,
    slidesToShow: visibleSlideCount,
    slidesToScroll: 1,
    dots: isDotted,
    arrows: arrows,
    customPaging: isDotted
      ? () => (
          <div className="bg-orange-500 w-2 h-2 opacity-40 rounded-full"></div>
        )
      : undefined,
    appendDots: isDotted
      ? (dots: React.ReactNode) => (
          <div style={{ marginTop: 2 + "rem", position: "static" }}>
            <ul>{dots}</ul>
          </div>
        )
      : undefined,
    nextArrow: arrows ? <CustomArrowR arrowStyles={arrowStyles} /> : undefined,
    prevArrow: arrows ? <CustomArrowL arrowStyles={arrowStyles} /> : undefined,
  };

  return (
    <ul className={cn("mt-6 mb-10", listStyles)}>
      <SliderSlick {...props} {...sliderOptions}>{list}</SliderSlick>
    </ul>
  );
};

const CustomArrowL = ({
  onClick,
  onClickL,
  arrowStyles,
}: CustomArrowLProps) => {
  return (
    <Icon
      IconComponent={FaChevronLeft}
      className={cn(
        "absolute -left-16 top-[45%] w-7 h-7 text-gray-100/40 hover:text-gray-100",
        arrowStyles
      )}
      onClick={onClick}
    />
  );
};

const CustomArrowR = ({
  onClick,
  onClickR,
  arrowStyles,
}: CustomArrowRProps) => {
  return (
    <Icon
      IconComponent={FaChevronRight}
      className={cn(
        "absolute -right-16 top-[45%] w-7 h-7 text-gray-100/40 hover:text-gray-100",
        arrowStyles
      )}
      onClick={onClick}
    />
  );
};
