import { VariantProps } from "class-variance-authority";
import { Link as L } from "react-router-dom";

import { linkVariants } from "src/styles/LinkStyles";
import { cn } from "src/utils";

interface LinkProps {
  children: React.ReactNode;
  path: string;
  styles?: string;
}

interface LinkProps extends VariantProps<typeof linkVariants> {}

export const Link = ({ size, variant, rounded, children, styles, path }: LinkProps) => {
  return (
    <L className={cn(linkVariants({ size, variant, rounded }), styles)} to={path}>
      {children}
    </L>
  );
};
