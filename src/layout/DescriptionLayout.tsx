import { twMerge } from "tailwind-merge";

interface DescriptionLayoutProps {
  cursiveText?: string;
  title?: string;
  coloredText?: string;
  description?: string;
  children?: React.ReactNode;
  styles?: string;
  contentWidth?: string
}

export const DescriptionLayout = ({
  cursiveText,
  title,
  coloredText,
  description,
  children,
  styles,
  contentWidth
}: DescriptionLayoutProps) => {
  return (
    <section
      className={twMerge("w-1/3 py-16 box-content", styles)}
    >
      <p className="great-vibes text-orange-400 text-2xl ">{cursiveText}</p>
      <h1 className="text-5xl font-bold mt-2 mb-5">
        <span className="text-orange-400">{coloredText}</span>
        {title}
      </h1>
      <p className={twMerge("mb-8", contentWidth)}>{description}</p>
      {children}
    </section>
  );
};
