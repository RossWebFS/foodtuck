import { PageWrapper } from "src/containers/layouts/PageWrapper";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="bg-black h-20 text-gray-100 fixed right-0 left-0 z-50">
      <PageWrapper wrapStyles="flex justify-between items-center">
        {children}
      </PageWrapper>
    </header>
  );
};
