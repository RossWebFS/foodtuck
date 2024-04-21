interface IntroSectionProps {
  children: React.ReactNode;
  bgImg?: React.ReactNode;
  imageFilter?: string;
  imageStyles?: string;
}

export const PageSectionImageWrapper = ({
  children,
  bgImg,
  imageStyles,
  imageFilter = "",
}: IntroSectionProps) => {
  return (
    <div className={imageStyles} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={imageFilter}>{children}</div>
    </div>
  );
};
