import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "src/utils";
import { buttonVariants } from "src/styles/ButtonStyles";

interface ButtonProps {
  className?: string;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  size,
  rounded,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, rounded }), className)}
      {...props}
    />
  );
};
