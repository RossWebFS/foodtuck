import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    variant: {
      default:
        "inline-block transition-colors duration-200 hover:text-orange-400 cursor-pointer",
      boxed: "bg-orange-400 p-4 box-border w-fit rounded",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
