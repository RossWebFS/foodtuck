import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  styles?: string;
}

export const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button
      className={`bg-orange-400 px-3 py-1 hover:bg-orange-500 transition-colors duration-200 ${styles}`}
    >
      {children}
    </button>
  );
};
