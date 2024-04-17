import { recentPosts, usefulLinkRoutes, helpRoutes } from "src/constants";

import { SupportSection } from "./SupportSection";
import { FooterInfo } from "./FooterInfo";
import { MediaFooterSection } from "./MediaFooterSection";
import { FooterLinkList } from "src/features/FooterLinkList";
import { RecentPosts } from "src/features/RecentPosts";
import { PageWrapper } from "src/layouts/PageWrapper";

import footerLeaves from "src/assets/footerLeaves.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 relative">
      <PageWrapper>
        <SupportSection />

        <section className="flex justify-between mt-10">
          <FooterInfo />
          <FooterLinkList links={usefulLinkRoutes} listTitle="Useful Links" />
          <FooterLinkList links={helpRoutes} listTitle="Help?" />
          <RecentPosts recentPosts={recentPosts} />
        </section>
      </PageWrapper>

      <MediaFooterSection />

      <img
        width="10%"
        className="absolute bottom-0 right-0"
        src={footerLeaves}
        alt="leaves"
      />
    </footer>
  );
};
