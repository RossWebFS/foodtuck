import React from "react";

interface IntroSectionProps {
  children?: React.ReactNode;
  bgImg?: any;
}

export const IntroSection = ({ children, bgImg }: IntroSectionProps) => {
  return (
    <article style={{ backgroundImage: `url(${bgImg})` }}>{children}</article>
  );
};
