import { twMerge } from "tailwind-merge";

interface IconProps {
  children: React.ReactNode;
  styles?: string;
}

interface IconBoxProps {
  children: React.ReactNode;
  styles?: string
}

export const IconBox = ({children, styles}: IconBoxProps) => {
  return <div className={twMerge("bg-orange-400 p-4 box-border w-fit rounded", styles)}>{children}</div>;
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
