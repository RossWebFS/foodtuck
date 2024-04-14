import { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

import { cn } from "src/utils";
import { inputVariants } from "src/styles/InputStyles";

interface InputProps {
  styles?: string;
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = ({ styles, variant, rounded, ...props }: InputProps) => {
  return (
    <input
      className={cn(inputVariants({ variant, rounded }), styles)}
      {...props}
    />
  );
};
