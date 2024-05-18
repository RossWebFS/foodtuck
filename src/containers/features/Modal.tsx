import { icons } from "src/constants";
import { cn } from "src/utils";

interface ModalProps {
  isSuccesful: boolean;
  isActive: boolean;
  succesfulMes: string;
  errorMes: string;
}

export const Modal = ({
  isSuccesful,
  isActive = false, 
  succesfulMes,
  errorMes,
}: ModalProps) => {
  return (
    <div
      className={cn(
        "fixed w-full left-0 -top-14 z-[51] text-orange-400 flex justify-center items-center transotion-all duration-[600ms]",
        {
          "top-5": isActive,
        }
      )}
    >
      {isSuccesful ? (
        <span className="bg-gray-100 px-4 py-2">
          {succesfulMes}
          <icons.check.icon className="w-10 h-10 inline-block" />
        </span>
      ) : (
        <span className="bg-gray-100 px-4 py-2">
          {errorMes}
          <icons.close.icon className="w-10 h-10 inline-block" />
        </span>
      )}
    </div>
  );
};
