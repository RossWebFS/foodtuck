import { useSupportingByEmail } from "src/hooks/useSupportingByEmail";

import { TRoutes } from "src/types";
import { recentPosts, usefulLinkRoutes, helpRoutes } from "src/constants";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiClockClockwiseLight } from "react-icons/pi";

import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { IconBox } from "src/components/Icon";
import { IconList } from "src/components/IconList";
import { RecentPosts } from "src/components/RecentPosts";
import { PageWrapper } from "src/layout/PageWrapper";

import footerLeaves from "src/assets/footerLeaves.png";

interface FooterLinksProps {
  links: TRoutes[];
  listTitle?: string;
}

export const Footer = () => {
  const footerIcons: React.ReactNode[] = [
    <BiLogoFacebook size={15} />,
    <AiOutlineTwitter size={15} />,
    <AiOutlineInstagram size={15} />,
    <BsYoutube size={15} />,
    <BsPinterest size={15} />,
  ];

  return (
    <footer className="bg-black text-gray-100 relative">
      <PageWrapper>
        <section className="flex justify-between border-b-2 border-orange-400 p-10">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-400">Still</span> you need our
              support ?
            </h2>
            <p className="mt-2">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          <SupportEmail />
        </section>

        <section className="flex justify-between mt-10">
          <FooterInfo />
          <FooterLinks links={usefulLinkRoutes} listTitle="Useful Links" />
          <FooterLinks links={helpRoutes} listTitle="Help?" />
          <RecentPosts recentPosts={recentPosts} />
        </section>
      </PageWrapper>

      <section className="bg-orange-400 h-16 mt-2">
        <PageWrapper styles="flex justify-between items-center">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

          <IconList
            listStyles="z-10"
            listItemStyles="text-gray-600 bg-gray-100 px-1.5"
            icons={footerIcons}
          />
        </PageWrapper>
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

const SupportEmail = () => {
  const {
    emailValue,
    onChangeEmailValue,
    onSentSupportEmail,
    emailMessageHandler,
  } = useSupportingByEmail();

  return (
    <div>
      <Input
        styles="mr-3"
        type="email"
        placeholder="Enter your email"
        value={emailValue}
        onChange={onChangeEmailValue}
        onKeyDown={onSentSupportEmail}
        variant="colored"
      />
      <Button onClick={emailMessageHandler}>Subscribe now</Button>
    </div>
  );
};

const FooterLinks = ({ listTitle, links }: FooterLinksProps) => {
  const additionLinks: React.ReactNode[] = links.map((l) => {
    return (
      <li key={l.path} className="my-5">
        <Link variant="colored" path={l.path}>
          {l.routeName}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <h3 className="text-lg font-bold">{listTitle}</h3>
      <ul>{additionLinks}</ul>
    </nav>
  );
};

const FooterInfo = () => {
  return (
    <article className="w-1/4">
      <div>
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          fugiat nobis voluptas iure eveniet dolore quo earum. Rem illum, sit
          ullam, fugiat doloremque a ipsa totam odit error dolores iusto.
        </p>
      </div>

      <div className="flex">
        <IconBox>
          <PiClockClockwiseLight size={50}/>
        </IconBox>
        <div className="pl-4">
          <h5>Opening Houres</h5>
          <p>Mon - Sat(8.00 - 6.00)</p>
          <p>Sunday - Closed</p>
        </div>
      </div>
    </article>
  );
};
