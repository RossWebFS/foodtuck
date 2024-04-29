import SliderSlick from "react-slick";
import { Icon } from "src/components/Icon";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { cn } from "src/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  list: any[];
  visibleSlideCount?: number;
  isDotted?: boolean;
  arrows?: boolean;
  className?: string;
}

interface CustomArrowProps {
  className?: string;
  onClick?: () => void;
}

export const Slider = ({
  list,
  visibleSlideCount = 1,
  isDotted = false,
  arrows = false,
  className,
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
    nextArrow: arrows ? <CustomArrowR /> : undefined,
    prevArrow: arrows ? <CustomArrowL /> : undefined,
  };

  return (
    <ul className={cn("mt-6 mb-10", className)}>
      <SliderSlick {...sliderOptions}>{list}</SliderSlick>
    </ul>
  );
};

const CustomArrowL = ({ onClick }: CustomArrowProps) => {
  return (
    <Icon
      IconComponent={FaChevronLeft}
      className="absolute -left-16 top-[45%] w-7 h-7 text-gray-100/40 hover:text-gray-100"
      onClick={onClick}
    />
  );
};

const CustomArrowR = ({ onClick }: CustomArrowProps) => {
  return (
    <Icon
      IconComponent={FaChevronRight}
      className="absolute -right-16 top-[45%] w-7 h-7 text-gray-100/40 hover:text-gray-100"
      onClick={onClick}
    />
  );
};