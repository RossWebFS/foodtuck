import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "src/containers/layouts/Header";
import { Footer } from "src/containers/layouts/Footer";
import { HomePage } from "src/pages/HomePage";
import { Navbar } from "src/containers/features/Navbar";
import { NavIconList } from "src/containers/features/NavIconList";
import { NavLogo } from "src/containers/features/NavLogo";

import { SupportSection } from "src/containers/SupportSection";
import { FooterInfo } from "src/containers/FooterInfo";
import { MediaFooterSection } from "src/containers/MediaFooter";
import { FooterLinkList } from "src/containers/features/FooterLinkList";
import { RecentPosts } from "src/containers/features/RecentPostList";

import { PiClockClockwiseLight } from "react-icons/pi";
import footerLeaves from "src/assets/decorations/footerLeaves.png";

import {
  usefulLinkRoutes,
  helpRoutes,
  recentPosts,
  navRoutes,
} from "src/constants";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <NavLogo path="/" logoText="Food" highlightedText="tuck" />
        <Navbar
          navListItemStyles="mx-4"
          links={navRoutes}
          linkStyles="hover:text-gray-300"
        />
        <NavIconList />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer
        form={<SupportSection />}
        info={
          <>
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
          </>
        }
        media={
          <MediaFooterSection copyright="Copyright © 2022 by Ayeman. All Rights Reserved." />
        }
        decorationImage={footerLeaves}
      />
    </BrowserRouter>
  );
}

export default App;
