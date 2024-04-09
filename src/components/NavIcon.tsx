import React from "react";

type NavIconProps = {
    children: React.ReactNode;
}

export const NavIcon = ({children} : NavIconProps) => {
  return (
    <li className="mx-2 text-gray-100 transition-colors duration-200 hover:text-gray-300 cursor-pointer">
      {children}
    </li>
  );
};
