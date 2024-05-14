import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formDate = (): string => {
  return `${new Date().getDate()} ${new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(new Date())} ${new Date().getFullYear()}`;
};

export const formPrice = (price: number | null, digitLength: number = 2) => {
  return price?.toFixed(digitLength);
};
