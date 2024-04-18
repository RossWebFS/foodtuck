import { VariantProps } from "class-variance-authority";
import { SVGProps } from "react";

import { iconVariants } from "src/styles/IconStyles";
import { cn } from "src/utils";

interface IconProps {
  IconComponent: React.ElementType;
}

interface IconProps
  extends SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {}

export const Icon = ({
  IconComponent,
  variant,
  className,
  ...props
}: IconProps) => {
  return (
    <IconComponent
      className={cn(iconVariants({ variant }), className)}
      {...props}
    />
  );
};
