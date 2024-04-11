import React from "react";

type IconProps = {
  children: React.ReactNode;
  styles?: string;
};

export const Icon = ({ children, styles }: IconProps) => {
  return (
    <li
      className={`transition-colors duration-200 hover:text-orange-400 cursor-pointer ${styles}`}
    >
      {children}
    </li>
  );
};
