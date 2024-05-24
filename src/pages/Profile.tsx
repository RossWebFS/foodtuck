import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";
import userAvatar from "src/assets/users/User1.png";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "src/utils";
import { useState } from "react";

export const ProfilePage = () => {
  const links = [routes.HOME, routes.PROFILE];

  const [isOpenedAccordion, setIsOpenedAccordion] = useState<boolean>(false);

  return (
    <main className="py-20">
      <PageIntro links={links} title="Profile" />

      <Wrapper>
        <section className="p-10 shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">Personal Information</h1>

          <div className="flex justify-between py-6 border-t border-b border-gray-300">
            <div className="flex gap-8">
              <p className="text-gray-500 mt-10">Profile photo</p>
              <img
                src={userAvatar}
                alt="avatar"
                className="rounded-full w-40 h-40"
              />
            </div>

            <button className="bg-transparent h-fit mt-10 text-orange-400 border-none">
              Change
            </button>
          </div>
          <div className="flex justify-between py-6 border-t border-b border-gray-300">
            <div className="flex gap-8 items-center">
              <p className="text-gray-500">Name</p>
              <p className=" text-xl">User1</p>
            </div>

            <button className="bg-transparent h-fit mt-10 text-orange-400 border-none">
              Change
            </button>
          </div>
          <div className="flex justify-between py-6 border-t border-b border-gray-300">
            <div className="flex gap-8 items-center">
              <p className="text-gray-500">Email</p>
              <p className=" text-xl">Email</p>
            </div>

            <button className="bg-transparent h-fit mt-10 text-orange-400 border-none">
              Change
            </button>
          </div>
          <div className="flex justify-between py-5 border-t border-b border-gray-300"></div>

          <div className="flex py-6 border-t border-b border-gray-300">
            <div>
              <div className="flex justify-between gap-4 items-center h-fit">
                <p>Other</p>
                <FaChevronDown
                  onClick={() => setIsOpenedAccordion(!isOpenedAccordion)}
                  className={cn("duration-300 transition-all cursor-pointer", {
                    "rotate-180": isOpenedAccordion,
                  })}
                />
              </div>
              <div className={cn("w-full h-10 duration-300 transition-all overflow-hidden", {
                "h-0": !isOpenedAccordion
              })}>
                <button className="bg-transparent mt-3 text-red-500 border-none">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </main>
  );
};
