import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "src/utils";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useUserStore } from "src/store/UserStore";
import { useNavigate, useParams } from "react-router-dom";

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
  const imgRef: React.RefObject<HTMLInputElement> = useRef(null);
  const [img, setImg] = useState<string>(
    user?.avatar || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
  );

  useEffect(() => {
    !user && navigateFromUser("/sign-up");
  }, []);

  useEffect(() => {
    if (user) {
      const { id } = user;
      update(id, { ...user, avatar: img });
    }
  }, [img]);

  const {userId} = useParams()

  const links = [routes.HOME,
     { ...routes.PROFILE, path: `${routes.PROFILE.path}/${userId}` },
    ];

  const clickImgHandler = () => {
    imgRef.current?.click();
  };

  const uploadImgHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        await setImg(data?.location);
      }
    }
  };

  const editNameHandler = async () => {
    if (user) {
      const { id } = user;
      await update(id, { ...user, name });
      setIsActiveNameInput(false);
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
                  src={img}
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
                <div
                  className="flex justify-between gap-4 items-center h-fit cursor-pointer"
                  onClick={() => setIsOpenedAccordion(!isOpenedAccordion)}
                >
                  <p>Other</p>
                  <FaChevronDown
                    className={cn("duration-300 transition-all", {
                      "rotate-180": isOpenedAccordion,
                    })}
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
