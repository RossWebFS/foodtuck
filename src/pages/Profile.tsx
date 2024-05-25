import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "src/utils";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useUserStore } from "src/store/UserStore";
import { useNavigate } from "react-router-dom";

import userAvatar from "src/assets/users/defaultUser.png";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";

export const ProfilePage = () => {
  const [user, signOut, update] = useUserStore((state) => [
    state.user,
    state.signOut,
    state.update,
  ]);
  const [isOpenedAccordion, setIsOpenedAccordion] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.name || "");
  const [isActiveNameInput, setIsActiveNameInput] = useState<boolean>(false);
  const navigateFromUser = useNavigate();

  useEffect(() => {
    !user && navigateFromUser("/sign-up");
  }, []);

  const links = [routes.HOME, routes.PROFILE];

  const imgRef: React.RefObject<HTMLInputElement> = useRef(null);
  const [img, setImg] = useState<File>();

  const clickImgHandler = () => {
    imgRef.current?.click();
  };

  const uploadImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.files?.[0]);
  };

  const editNameHandler = async () => {
    if (user) {
      const {id} = user 
      await update(id, { ...user, name });
      setIsActiveNameInput(false)
    }
  };

  return (
    user && (
      <main className="py-20">
        <PageIntro links={links} title="Profile" />

        <Wrapper>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-10 shadow-lg rounded-lg"
          >
            <h1 className="text-2xl font-semibold mb-6">
              Personal Information
            </h1>

            <div className="flex items-center justify-between py-6 border-t border-b border-gray-300">
              <div className="flex gap-8">
                <p className="text-gray-500 mt-10">Profile photo</p>
                <img
                  src={(img && URL.createObjectURL(img)) || userAvatar}
                  alt="avatar"
                  className="rounded-full w-40 h-40 object-cover"
                />
              </div>

              <button
                onClick={clickImgHandler}
                className="bg-transparent h-fit text-orange-400 border-none"
              >
                Change
                <input
                  ref={imgRef}
                  type="file"
                  className="hidden"
                  onChange={uploadImgHandler}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-6 border-t border-b border-gray-300">
              <div className="flex gap-8 items-center">
                <p className="text-gray-500">Name</p>
                {isActiveNameInput ? (
                  <div>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      className="outline-orange-400 outline-0 focus:border-orange-400"
                      autoFocus
                    />
                    <Button onClick={() => editNameHandler()}>Confirm</Button>
                  </div>
                ) : (
                  <p className=" text-xl">{user.name}</p>
                )}
              </div>

              <button
                onClick={() => setIsActiveNameInput(!isActiveNameInput)}
                className="bg-transparent h-fit text-orange-400 border-none"
              >
                Change
              </button>
            </div>

            <div className="py-6 border-t border-b border-gray-300">
              <div className="flex gap-8 items-center">
                <p className="text-gray-500">Email</p>
                <p className=" text-xl">{user.email}</p>
              </div>
            </div>
            <div className="flex justify-between py-5 border-t border-b border-gray-300"></div>

            <div className="flex py-6 border-t border-b border-gray-300">
              <div>
                <div className="flex justify-between gap-4 items-center h-fit">
                  <p>Other</p>
                  <FaChevronDown
                    onClick={() => setIsOpenedAccordion(!isOpenedAccordion)}
                    className={cn(
                      "duration-300 transition-all cursor-pointer",
                      {
                        "rotate-180": isOpenedAccordion,
                      }
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "w-full h-10 duration-300 transition-all overflow-hidden",
                    {
                      "h-0": !isOpenedAccordion,
                    }
                  )}
                >
                  <button
                    onClick={() => {
                      signOut();
                      navigateFromUser("/");
                    }}
                    className="bg-transparent mt-3 text-red-500 border-none"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Wrapper>
      </main>
    )
  );
};
