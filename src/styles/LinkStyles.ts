import { cva } from "class-variance-authority";

export const linkVariants = cva("transition-all duration-200 text-gray-100", {
  variants: {
    variant: {
      default: "hover:text-gray-300",
      colored: "hover:text-orange-400",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
