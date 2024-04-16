import { VariantProps } from "class-variance-authority";
import { iconVariants } from "src/styles/IconStyles";
import { cn } from "src/utils";

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

interface IconProps extends VariantProps<typeof iconVariants> {}

export const Icon = ({ variant, children, className }: IconProps) => {
  return (
    <div className={cn(iconVariants({ variant }), className)}>{children}</div>
  );
};
