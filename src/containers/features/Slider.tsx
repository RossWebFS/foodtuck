import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";
import { TImageInfo } from "src/types";

interface SliderProps {
  list: TImageInfo[];
  slidesVisibleCount?: number;
}

export const Slider = ({ list, slidesVisibleCount = 1 }: SliderProps) => {
  const slides = list.map((item) => {
    return (
      <li>
        <SwiperSlide>
          <img className="w-60" src={item.img} alt={item.info} />
          <p className="bg-gray-100 text-black p-4 text-center font-semibold text-lg rounded-b w-60">
            {item.info}
          </p>
        </SwiperSlide>
      </li>
    );
  });

  return (
    <ul className="w-full mt-6 mb-10">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={slidesVisibleCount}
        className="max-w-[70%]"
        modules={[FreeMode, Pagination]}
        grabCursor={true}
      >
        {slides}
      </Swiper>
    </ul>
  );
};
