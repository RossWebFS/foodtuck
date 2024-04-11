import React from "react";
import { Link } from "react-router-dom";

interface OutlinedLinkProps {
  children: React.ReactNode;
  path: string;
  styles?: string;
}

export const OutlinedLink = ({ children, styles, path }: OutlinedLinkProps) => {
  return (
    <Link
      className={`
        border 
        border-orange-400 
        rounded-full 
        text-orange-400 
        px-6 py-2 
        hover:bg-orange-500 
        hover:text-gray-100 
        transition-colors duration-200
        ${styles}
        `}
      to={path}
    >
      {children}
    </Link>
  );
};
