import { cn } from "src/utils";

interface WrapperProps {
  children: React.ReactNode;
  wrapStyles?: string;
}

export const Wrapper = ({ children, wrapStyles }: WrapperProps) => {
  return (
    <div className={cn("max-w-screen-xl h-full mx-auto", wrapStyles)}>
      {children}
    </div>
  );
};
