import { cva } from "class-variance-authority";

export const linkVariants = cva("transition-all duration-200 inline-block", {
  variants: {
    variant: {
      default: "hover:text-gray-300",
      colored: "hover:text-orange-400",
      button:
        "px-3 py-1 bg-orange-400 border border-orange-400 hover:bg-orange-500",
      outlined:
        "bg-transparent text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-gray-100 transition-all duration-200 px-7 py-2",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
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
