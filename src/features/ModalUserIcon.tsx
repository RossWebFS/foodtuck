import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Icon } from "src/components/Icon";
import { cn } from "src/utils";

export const ModalUserIcon = () => {
  const [isActiveUserModal, setIsActiveUserModal] = useState<boolean>(false);

  const userIconClickHandler = () => {
    setIsActiveUserModal(!isActiveUserModal)
  };

  return (
    <>
      <Icon onClick={() => userIconClickHandler}>
        <AiOutlineUser size={20} />
      </Icon>

      <section
        className={cn(
          "bg-white w-60 h-80 text-center align-middle absolute top-20 right-12 opacity-0 transition-all duration-300",
          {
            "block opacity-100": isActiveUserModal
          }
        )}
      >
        There will be user account..
      </section>
    </>
  );
};
