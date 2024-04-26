import { Link } from "react-router-dom";

import { Wrapper } from "src/containers/layouts/Wrapper";
import { BackgroundImageWrapper } from "src/containers/layouts/BackgroundImageWrapper";
import { Description } from "src/containers/features/Description";
import { Icon } from "src/components/Icon";
import { CiPlay1 } from "react-icons/ci";

import { buttonVariants } from "src/styles/ButtonStyles";
import { cn } from "src/utils";

import ActivitySection from "src/assets/backgrounds/ActivitySection.png";

export const Activity = () => {
  return (
    <BackgroundImageWrapper bgImg={ActivitySection}>
      <Wrapper wrapStyles="flex flex-row-reverse">
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
              className={cn(
                buttonVariants({
                  variant: "outlined",
                  rounded: "full",
                  size: "lg",
                }),
                "py-4 px-9 mr-6"
              )}
              to="/activity"
            >
              Read More
            </Link>

            <a href="#" className="font-semibold">
              <Icon
                IconComponent={CiPlay1}
                className="w-16 h-16 rounded-full pl-5 inline mr-2"
                variant="boxed"
              />
              Play Video
            </a>
          </div>
        </Description>
      </Wrapper>
    </BackgroundImageWrapper>
  );
};
