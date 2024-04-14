import { twMerge } from "tailwind-merge";

type IconProps = {
  children: React.ReactNode;
  styles?: string;
};

export const Icon = ({ children, styles }: IconProps) => {
  return (
    <span
      className={twMerge(
        "inline-block transition-colors duration-200 hover:text-orange-400 cursor-pointer",
        styles
      )}
    >
      {children}
    </span>
  );
};
