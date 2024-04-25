import { cn } from "src/utils";

interface DescriptionLayoutProps {
  highlightedText?: string;
  title?: string;
  coloredText?: string;
  description?: string;
  children?: React.ReactNode;
  styles?: string;
  contentWidth?: string;
}

export const Description = ({
  highlightedText,
  title,
  coloredText,
  description,
  children,
  styles,
  contentWidth,
}: DescriptionLayoutProps) => {
  return (
    <section className={cn("w-1/3 py-16 box-content", styles)}>
      {highlightedText && (
        <p className="great-vibes text-orange-400 text-2xl">
          {highlightedText}
        </p>
      )}
      <h2 className="text-5xl font-bold mt-3 mb-6">
        <span className="text-orange-400">{coloredText}</span>
        {title}
      </h2>
      {description && <p className={cn("mb-8", contentWidth)}>{description}</p>}
      {children}
    </section>
  );
};
