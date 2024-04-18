import { SupportSection } from "src/containers/SupportSection";
import { FooterInfo } from "src/containers/FooterInfo";
import { MediaFooterSection } from "src/containers/MediaFooterSection";
import { FooterLinkList } from "src/containers/features/FooterLinkList";
import { RecentPosts } from "src/containers/features/RecentPosts";
import { PageWrapper } from "src/containers/layouts/PageWrapper";

import { PiClockClockwiseLight } from "react-icons/pi";

import footerLeaves from "src/assets/footerLeaves.png";

import { recentPosts, usefulLinkRoutes, helpRoutes } from "src/constants";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 relative">
      <PageWrapper>
        <SupportSection />

        <section className="flex justify-between mt-10">
          <FooterInfo
            OpenHoursIcon={PiClockClockwiseLight}
            title="About Us"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          fugiat nobis voluptas iure eveniet dolore quo earum. Rem illum, sit
          ullam, fugiat doloremque a ipsa totam odit error dolores iusto."
            schedule={{
              openedHours: "Mon - Sat(8.00 - 6.00)",
              closedHours: "Sunday",
            }}
          />

          <FooterLinkList
            listItemStyles="my-5"
            links={usefulLinkRoutes}
            listTitle="Useful Links"
            linkStyles="hover:text-orange-400"
          />

          <FooterLinkList
            listItemStyles="my-5"
            links={helpRoutes}
            listTitle="Help?"
            linkStyles="hover:text-orange-400"
          />
          <RecentPosts listTitle="Recent Post" recentPosts={recentPosts} />
        </section>
      </PageWrapper>

      <MediaFooterSection copyright="Copyright © 2022 by Ayeman. All Rights Reserved." />

      <img
        width="10%"
        className="absolute bottom-0 right-0"
        src={footerLeaves}
        alt="leaves"
      />
    </footer>
  );
};
