import { useState } from "react";
import { cn } from "src/utils";

interface AccordionProps {
  title: string;
  description: string;
}

export const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpened, setisOpened] = useState(false);

  return (
    <div
      className={cn(
        "h-16 bg-orange-50 p-4 transition-all duration-500 overflow-hidden",
        {
          "h-40": isOpened,
        }
      )}
    >
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg mt-1">{title}</h2>
        <span
          onClick={() => setisOpened(!isOpened)}
          className={cn("text-3xl relative cursor-pointer")}
        >
          <span className={cn("rotate-90 absolute right-0")}>|</span>
          <span
            className={cn(
              "rotate-0 absolute -top-0.5 right-0.5 transition-all duration-500",
              {
                "rotate-90 -top-[0.3px] right-[0.5px]": isOpened,
              }
            )}
          >
            |
          </span>
        </span>
      </div>

      <div className="mt-3">{description}</div>
    </div>
  );
};
