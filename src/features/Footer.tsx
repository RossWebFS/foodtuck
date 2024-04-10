import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsPinterest } from "react-icons/bs";

import Watch from "src/assets/Watch.png";
import footerLeaves from "src/assets/footerLeaves.png";
import { PageWrapper } from "src/layout/PageWrapper";

import { recentPosts, usefulLinkRoutes, helpRoutes } from "src/constants";

export const Footer = () => {
  const footerIcons: React.ReactNode[] = [
    <BiLogoFacebook size={15} />,
    <AiOutlineTwitter size={15} />,
    <AiOutlineInstagram size={15} />,
    <BsYoutube size={15} />,
    <BsPinterest size={15} />,
  ].map((i) => (
    <li className="text-gray-600 bg-gray-100 p-1 cursor-pointer">{i}</li>
  ));

  const usefulLinks = usefulLinkRoutes.map((l) => {
    return (
      <li className="my-5 hover:text-orange-400 transition-colors duration-200">
        <Link to={l.path}>{l.routeName}</Link>
      </li>
    );
  });

  const helpLinks = helpRoutes.map((l) => {
    return (
      <li className="my-5 hover:text-orange-400 transition-colors duration-200">
        <Link to={l.path}>{l.routeName}</Link>
      </li>
    );
  });

  const posts = recentPosts.map((p) => {
    return (
      <li key={p.id} className="flex my-2">
        <img className="object-contain" src={p.img} alt={p.title} />
        <div className="ml-2">
          <span className="text-gray-400 text-sm">{p.date}</span>
          <p className="mb-0 mt-1">{p.title}</p>
        </div>
      </li>
    );
  });

  return (
    <footer className="bg-black text-gray-100 relative">
      <PageWrapper>
        <article className="w-full">
          <section className="flex justify-between border-b-2 border-orange-400 p-8">
            <div className="">
              <h2 className="text-3xl font-bold">
                <span className="text-orange-400">Still</span> you need our
                support ?
              </h2>
              <p className="mt-2">
                Don’t wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>

            <div className="h-fit">
              <input
                className="bg-transparent border-orange-400 border px-3 py-1"
                type="email"
                placeholder="Enter your email"
              />
              <button className=" bg-orange-500 px-3 py-1 h-auto border border-orange-400">
                Subscribe now
              </button>
            </div>
          </section>

          <section className="flex justify-between mt-6">
            <article className="w-1/4">
              <div>
                <h3 className="text-lg font-bold mb-4">About Us</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus fugiat nobis voluptas iure eveniet dolore quo earum.
                  Rem illum, sit ullam, fugiat doloremque a ipsa totam odit
                  error dolores iusto.
                </p>
              </div>

              <div className="flex">
                <img className="object-contain" src={Watch} alt="clock" />

                <div className="pl-4">
                  <h5>Opening Houres</h5>
                  <p>Mon - Say(8.00 - 6.00)</p>
                  <p>Sunday - Closed</p>
                </div>
              </div>
            </article>

            <nav>
              <h3 className="text-lg font-bold">Useful Links</h3>

              <ul>{[usefulLinks]}</ul>
            </nav>

            <nav>
              <h3 className="text-lg font-bold">Help?</h3>

              <ul>{[helpLinks]}</ul>
            </nav>

            <nav>
              <h3 className="text-lg font-bold">Recent Post</h3>
              <ul>{[posts]}</ul>
            </nav>
          </section>
        </article>
      </PageWrapper>

      <section className="bg-orange-400 h-16">
        <PageWrapper styles="flex justify-between items-center">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

          <ul className="flex gap-x-2">{[footerIcons]}</ul>
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
