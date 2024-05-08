import { icons } from "src/constants";
import { cn } from "src/utils";

interface RatingProps {
  rating: number;
  listStyles?: string;
  starStyles?: string;
}

export const Rating = ({ rating, listStyles, starStyles }: RatingProps) => {
  const stars = [...Array(5)].map((star, index) => {
    return (
      <li>
        <icons.star.icon
          className={cn("text-gray-400 w-4 h-4", starStyles, {
            "text-yellow-500": index < rating,
          })}
        />
      </li>
    );
  });

  return <ul className={cn("flex gap-1", listStyles)}>{stars}</ul>;
};
