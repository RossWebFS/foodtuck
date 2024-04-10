import React from "react";

type IconProps = {
  children: React.ReactNode;
};

export const Icon = ({ children }: IconProps) => {
  return (
    <li className="mx-2 text-gray-100 transition-colors duration-200 hover:text-gray-300 cursor-pointer">
      {children}
    </li>
  );
};
