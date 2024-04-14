import { cva } from "class-variance-authority";

export const inputVariants = cva("px-3 py-1", {
  variants: {
    variant: {
      default: "border border-gray-300 bg-transparent",
      colored: "border border-orange-400 bg-transparent",
    },
    rounded: {
      default: "rounded",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
