interface IntroSectionProps {
  children: React.ReactNode;
  bgImg?: React.ReactNode;
  imageFilter?: string;
  imageStyles?: string;
}

export const BackgroundImageWrapper = ({
  children,
  bgImg,
  imageStyles,
  imageFilter = "",
}: IntroSectionProps) => {
  return (
    <section className={imageStyles} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={imageFilter}>{children}</div>
    </section>
  );
};
