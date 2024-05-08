import { cn } from "src/utils";

interface CounterProps {
  counter: number;
  setCounter: (value: number) => void;
  downStyles?: string;
  counterStyle?: string;
  upStyles?: string;
}

export const Counter = ({
  counter,
  setCounter,
  downStyles,
  counterStyle,
  upStyles,
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
        onClick={() => counter > 0 && setCounter(counter - 1)}
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
        onClick={() => setCounter(counter + 1)}
      >
        +
      </span>
    </div>
  );
};
