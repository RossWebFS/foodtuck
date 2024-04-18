import { cn } from "src/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  wrapStyles?: string;
}

export const PageWrapper = ({ children, wrapStyles }: PageWrapperProps) => {
  return (
    <div className={cn("max-w-screen-xl h-full mx-auto", wrapStyles)}>
      {children}
    </div>
  );
};
