import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  styles?: string;
  handler?: () => void
}

export const Button = ({ children, styles, handler }: ButtonProps) => {
  return (
    <button
      className={`bg-orange-400 px-3 py-1 hover:bg-orange-500 transition-colors duration-200 ${styles}`}
      onClick={handler}
    >
      {children}
    </button>
  );
};
