import { PageWrapper } from "src/containers/layouts/PageWrapper";

interface FooterProps {
  form?: React.ReactNode;
  info?: React.ReactNode;
  media?: React.ReactNode;
  decorationImage?: string;
}

export const Footer = ({ form, info, media, decorationImage }: FooterProps) => {
  return (
    <footer className="bg-black text-gray-100 relative">
      <PageWrapper>
        {form}
        <section className="flex justify-between mt-10">{info}</section>
      </PageWrapper>
      {media}

      {decorationImage && (
        <img
          width="10%"
          className="absolute bottom-0 right-0"
          src={decorationImage}
          alt="leaves"
        />
      )}
    </footer>
  );
};
