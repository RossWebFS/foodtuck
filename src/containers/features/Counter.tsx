import { cn } from "src/utils";

interface CounterProps {
  counter: number;
  downStyles?: string;
  counterStyle?: string;
  upStyles?: string;
  onSubract?: () => void;
  onAdd?: () => void;
}

export const Counter = ({
  counter,
  downStyles,
  counterStyle,
  upStyles,
  onSubract,
  onAdd,
}: CounterProps) => {
  return (
    <div>
      <span
        className={cn(
          "px-4 py-2 border border-gray-400 cursor-pointer hover:bg-gray-100",
          downStyles,
          {
            "text-gray-400 cursor-default hover:bg-transparent": counter === 0,
          }
        )}
        onClick={() => {
          if (onSubract && counter > 0) onSubract();
        }}
      >
        -
      </span>
      <span className={cn("px-4 py-2 border border-gray-400", counterStyle)}>
        {counter}
      </span>
      <span
        className={cn(
          "px-4 py-2 border border-gray-400 cursor-pointer hover:bg-gray-100",
          upStyles
        )}
        onClick={() => {
          if (onAdd) onAdd();
        }}
      >
        +
      </span>
    </div>
  );
};
