import React from "react";

interface IntroSectionProps {
  children: React.ReactNode;
  bgImg?: React.ReactNode;
  styles?: string;
}

export const IntroSection = ({ children, bgImg, styles }: IntroSectionProps) => {
  return (
    <article className={`${styles}`} style={{ backgroundImage: `url(${bgImg})` }}>{children}</article>
  );
};
