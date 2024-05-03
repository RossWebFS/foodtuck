import { Link } from "src/components/Link";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Description } from "src/containers/features/Description";
import { Icon } from "src/components/Icon";

import Advertising from "src/assets/video/Restaurant Ad Video Template (Editable).mp4";

import { icons } from "src/constants";
import ActivitySection from "src/assets/backgrounds/ActivitySection.png";
import { Button } from "src/components/Button";
import { useRef, useState } from "react";
import { cn } from "src/utils";

export const Activity = () => {
  const [isActivePlayer, setIsActivePlayer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef) videoRef.current?.play();
  };

  return (
    <BackgroundImageWrapper bgImg={ActivitySection}>
      <Wrapper wrapStyles="flex flex-row-reverse relative">
        <Description
          highlightedText="Restaurant Active Process"
          title=" Document Every Food Bean Process untile it's saved"
          coloredText="We"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            unde facere consectetur dolor iure soluta"
          styles="w-[55%] flex flex-col items-end text-end pr-5"
          contentWidth="w-10/12"
        >
          <div className="inline-block ">
            <Link
              className="py-4 px-9 mr-6"
              variant="outlined"
              rounded="full"
              size="lg"
              to="/activity"
            >
              Read More
            </Link>

            <Button
              className="bg-transparent border-0 hover:bg-transparent"
              onClick={() => {
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
              Play Video
            </Button>
          </div>
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
              setIsActivePlayer(false);
              videoRef.current?.pause();
            }}
          />
          <video
            ref={videoRef}
            className="z-50 w-[75%]"
            src={Advertising}
            controls
          />
        </div>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
