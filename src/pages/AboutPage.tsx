import { icons, routes, team } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";

import AboutUs1 from "src/assets/products/AboutUs1.png";
import AboutUs2 from "src/assets/products/AboutUs2.png";
import AboutUs3 from "src/assets/products/AboutUs3.png";
import { Description } from "src/containers/features/Description";
import { Button } from "src/components/Button";
import { Icon } from "src/components/Icon";
import { cn } from "src/utils";
import { useState, useRef } from "react";

import WhyUs from "src/assets/backgrounds/WhuUs.png";
import Student from "src/assets/products/Student.png";
import Coffee from "src/assets/products/Coffee.png";
import Person from "src/assets/products/Person.png";
import TeamMembers from "src/assets/backgrounds/TeamMembers.png";
import Advertising from "src/assets/video/Restaurant Ad Video Template (Editable).mp4";
import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { FeedBackSlider } from "src/containers/FeedBackSlider";
import { FoodCategoryFilter } from "src/containers/FoodCategoryFilter";
import { Link } from "src/components/Link";

export const AboutPage = () => {
  const links = [routes.HOME, routes.ABOUT];
  const [isActivePlayer, setIsActivePlayer] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const members = team
    .map((member) => {
      return (
        <li className="w-[20%] shrink-0 shadow-lg">
          <img src={member.img} alt={member.status} />
          <div>
            <h2 className="text-center text-xl font-semibold mt-3">
              {member.name}
            </h2>
            <p className="text-center">{member.status}</p>
          </div>
        </li>
      );
    })
    .slice(0, 4);

  return (
    <main className="py-20">
      <PageIntro links={links} title="About Us" />

      <Wrapper>
        <section className="flex gap-8">
          <section className="grid grid-cols-2 gap-5">
            <img className="row-span-2" src={AboutUs2} alt="dish 1" />
            <img className="pt-20" src={AboutUs3} alt="dish 2" />
            <img src={AboutUs1} alt="dish 3" />
          </section>
          <Description
            styles="w-2/5"
            highlightedText="About Us"
            title="Food is an important part Of balanced diet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
            voluptatem excepturi, nemo placeat autem iste neceatibus minus
            unde voluptatibus!"
            contentWidth="w-11/12"
          >
            <Button
              className="bg-transparent border-0 text-black text-lg font-semibold hover:bg-transparent"
              onClick={() => {
                setIsPlayed(true);
                setIsActivePlayer(true);
                if (videoRef.current) videoRef.current.currentTime = 0;
                videoRef.current?.play();
              }}
            >
              <Icon
                IconComponent={icons.outlinedPlay.icon}
                className="w-16 h-16 rounded-full pl-5 inline mr-2"
                variant="boxed"
              />
              Watch Video
            </Button>
          </Description>
          <div
            className={cn(
              "fixed top-0 left-0 z-40 w-screen h-screen bg-black/90 flex items-center justify-center",
              {
                hidden: !isActivePlayer,
              }
            )}
          >
            <Icon
              variant="light"
              IconComponent={icons.close.icon}
              className="absolute left-[94%] top-10 z-50 w-8 h-8"
              onClick={() => {
                setIsPlayed(false);
                setIsActivePlayer(false);
                videoRef.current?.pause();
              }}
            />

            {videoRef.current?.paused ? (
              <Icon
                variant="light"
                IconComponent={icons.play.icon}
                className="w-12 h-12 absolute z-[51]"
                onClick={() => {
                  setIsPlayed(true);
                  videoRef.current?.play();
                }}
              />
            ) : (
              <Icon
                variant="light"
                IconComponent={icons.pause.icon}
                className="w-14 h-14 absolute z-[51] duration-300 text-transparent"
                onClick={() => {
                  setIsPlayed(false);
                  videoRef.current?.pause();
                }}
              />
            )}

            <video
              ref={videoRef}
              className="z-50 w-[75%]"
              src={Advertising}
              controls
            />
          </div>
        </section>

        <section className="my-20 flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-center mb-3">
            Why Choose Us
          </h2>
          <p className="w-1/3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            delectus perspiciatis corporis ducimus aliquid optio
          </p>
          <img className="my-10" src={WhyUs} alt="dishes" />
          <ul className="flex justify-between">
            <li className="text-center flex flex-col items-center w-1/4">
              <img src={Student} alt="student" />
              <h4 className="text-xl font-semibold my-4">Best Chefs</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                maiores nobis illo cum excepturi eum nostrum dolor animi dolores
                aspernatur
              </p>
            </li>
            <li className="text-center flex flex-col items-center w-1/4">
              <img src={Coffee} alt="coffee" />
              <h4 className="text-xl font-semibold my-4">120 item food</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                maiores nobis illo cum excepturi eum nostrum dolor animi dolores
                aspernatur
              </p>
            </li>
            <li className="text-center flex flex-col items-center w-1/4">
              <img src={Person} alt="person" />
              <h4 className="text-xl font-semibold my-4">Cleam Environment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                maiores nobis illo cum excepturi eum nostrum dolor animi dolores
                aspernatur
              </p>
            </li>
          </ul>
        </section>

        <BackgroundImageWrapper
          bgImg={TeamMembers}
          imageFilter="bg-orange-400/90"
          imageStyles="obect-cover bg-center mb-72"
        >
          <section className="flex flex-col items-center text-center pt-28 pb-44 relative">
            <h2 className="w-1/3 font-semibold text-4xl text-white">
              Team Members
            </h2>
            <p className="w-1/3 text-white mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              corrupti sequi, harum odit dolore consequatur a perspiciatis
            </p>

            <ul className="flex gap-8 justify-center z-10 absolute top-60">
              {members}
            </ul>
          </section>
        </BackgroundImageWrapper>

        <FeedBackSlider themeStyles="text-black hover:text-black/50" />

        <FoodCategoryFilter />

        <div className="flex justify-center">
          <Link to="/menu" variant="outlined">
            View Menu
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};
