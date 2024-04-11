import React from "react";
import { Link as L } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  path: string;
  styles?: string;
}

export const Link = ({ children, styles, path }: LinkProps) => {
  return (
    <li
      className={`${styles} hover:text-gray-300 transition-colors duration-200`}
    >
      <L to={path}>{children}</L>
    </li>
  );
};
