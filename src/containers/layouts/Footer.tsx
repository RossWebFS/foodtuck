import { Wrapper } from "src/containers/layouts/Wrapper";
import { SupportEmail } from "src/containers/features/SupportEmail";
import { FooterInfo } from "src/containers/FooterInfo";
import { FooterLinkList } from "src/containers/features/FooterLinkList";
import { RecentPosts } from "src/containers/features/RecentPosts";
import { IconList } from "src/containers/features/IconList";

import {
  usefulLinks,
  helpLinks,
  footerIcons,
  blogs,
} from "src/constants";

import { PiClockClockwiseLight } from "react-icons/pi";
import footerLeaves from "src/assets/decorations/footerLeaves.png";
import { getRecentBlogs } from "src/utils";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 relative">
      <Wrapper>
        <section className="flex justify-between border-b-2 border-orange-400 px-24 py-10">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-400">Still</span> you need our
              support ?
            </h2>
            <p className="mt-2">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          <SupportEmail
            placeholder="Enter your email"
            type="email"
            className="mr-3"
            buttonContent="Subscribe now"
          />
        </section>
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
            links={usefulLinks}
            listTitle="Useful Links"
          />

          <FooterLinkList
            listItemStyles="my-5"
            links={helpLinks}
            listTitle="Help?"
          />

          <div>
            <h3 className="text-lg font-bold">Recent Post</h3>
            <RecentPosts imgStyles="w-16 h-16" itemStyles="hover:bg-gray-100/10" recentPosts={getRecentBlogs(blogs, 3)} />
          </div>
        </section>
      </Wrapper>

      <section className="bg-orange-400 h-16 mt-2">
        <Wrapper wrapStyles="flex justify-between items-center">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

          <IconList
            iconStyles="w-4 h-4 text-gray-600"
            listStyles="z-10"
            listItemStyles="bg-gray-100 py-0.5 px-1.5"
            icons={footerIcons}
          />
        </Wrapper>
      </section>

      <img
        width="10%"
        className="absolute bottom-0 right-0"
        src={footerLeaves}
        alt="leaves"
      />
    </footer>
  );
};
