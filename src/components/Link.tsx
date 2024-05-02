import { VariantProps } from "class-variance-authority";
import { Link as L } from "react-router-dom";

import { linkVariants } from "src/styles/LinkStyles";
import { cn } from "src/utils";

interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

interface LinkProps extends VariantProps<typeof linkVariants> {}

export const Link = ({
  size,
  variant,
  rounded,
  children,
  className,
  to,
}: LinkProps) => {
  return (
    <L
      className={cn(linkVariants({ size, variant, rounded }), className)}
      to={to}
    >
      {children}
    </L>
  );
};
