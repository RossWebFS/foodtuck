import { cva } from "class-variance-authority";

export const buttonVariants = cva("inline-block", {
    variants: {
      variant: {
        default:
          "bg-orange-400 text-gray-100 border border-orange-400 hover:bg-orange-500 transition-all duration-200",
        outlined:
           "bg-transparent text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-gray-100 transition-all duration-200",
      },
      size: {
        default: "px-3 py-1",
        sm: "text-sm px-2 py-0.75",
        lg: "px-7 py-2"
      },
      rounded: {
        default: "rounded",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });