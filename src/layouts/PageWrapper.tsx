import { twMerge } from "tailwind-merge";

interface PageWrapperProps {
  children: React.ReactNode;
  styles?: string;
}

export const PageWrapper = ({ children, styles }: PageWrapperProps) => {
  return (
    <div className={twMerge("max-w-screen-xl h-full mx-auto", styles)}>
      {children}
    </div>
  );
};
