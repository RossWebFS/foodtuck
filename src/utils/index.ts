import clsx, { ClassValue } from "clsx";
import { TBlog } from "src/types";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formDate = (date = new Date()): string => {
  return `${date.getDate()} ${new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date)} ${date.getFullYear()}`;
};

export const formPrice = (price: number | null, digitLength: number = 2) => {
  return price?.toFixed(digitLength);
};

export const getRecentBlogs = (blogs: TBlog[], count: number = 1) => {
  const recentBlogs = blogs
    .sort(
      (blog1, blog2) =>
        new Date(blog2.date).getTime() - new Date(blog1.date).getTime()
    )
    .map((blog) => ({ ...blog, date: formDate(new Date(blog.date)) }))
    .slice(0, count);
  return recentBlogs;
};
