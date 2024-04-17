import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { iconVariants } from "src/styles/IconStyles";
import { cn } from "src/utils";

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

interface IconProps extends HTMLAttributes<HTMLDivElement> {}

interface IconProps extends VariantProps<typeof iconVariants> {}

export const Icon = ({ variant, children, className, ...props }: IconProps) => {
  return (
    <div {...props} className={cn(iconVariants({ variant }), className)}>{children}</div>
  );
};
