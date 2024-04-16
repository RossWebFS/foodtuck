import { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "src/utils";
import { inputVariants } from "src/styles/InputStyles";

interface InputProps {
  className?: string;
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = ({
  variant,
  rounded,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={cn(inputVariants({ variant, rounded }), className)}
      {...props}
    />
  );
};
