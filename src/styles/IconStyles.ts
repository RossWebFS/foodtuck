import { cva } from "class-variance-authority";

export const iconVariants = cva("text-gray-100 cursor-pointer", {
  variants: {
    variant: {
      default:
        "inline-block transition-colors duration-200 hover:text-orange-400",
      boxed: "bg-orange-400 p-4 box-border w-fit rounded",
      light: "inline-block transition-colors duration-200 hover:text-gray-300"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});









