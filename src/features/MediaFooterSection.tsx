import { PageWrapper } from "src/layouts/PageWrapper";
import { IconList } from "./IconList";

import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";

export const MediaFooterSection = () => {
  const footerIcons = [
    <BiLogoFacebook size={15} />,
    <AiOutlineTwitter size={15} />,
    <AiOutlineInstagram size={15} />,
    <BsYoutube size={15} />,
    <BsPinterest size={15} />,
  ];

  return (
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
  );
};
