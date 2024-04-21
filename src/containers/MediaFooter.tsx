import { PageWrapper } from "src/containers/layouts/PageWrapper";
import { IconList } from "src/containers/features/IconList";

import { footerIcons } from "src/constants";

interface MediaFooterSectionProps {
  copyright: string;
}

export const MediaFooterSection = ({ copyright }: MediaFooterSectionProps) => {
  return (
    <section className="bg-orange-400 h-16 mt-2">
      <PageWrapper wrapStyles="flex justify-between items-center">
        <p>{copyright}</p>

        <IconList
          iconStyles="w-4 h-4 text-gray-600"
          listStyles="z-10"
          listItemStyles="bg-gray-100 py-0.5 px-1.5"
          icons={footerIcons}
        />
      </PageWrapper>
    </section>
  );
};
