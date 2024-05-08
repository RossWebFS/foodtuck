import { SearchInputModal } from "./features/SearchInputModal";

import { icons } from "src/constants";
import { UserModal } from "./features/UserModal";
import { CartModal } from "./features/CartModal";
import { useState } from "react";

export const NavIconList = () => {
  const [activeModal, setActiveModal] = useState<null | string>(null);

  return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 border border-orange-400 rounded-full">
        <SearchInputModal
          IconComponent={icons.search.icon}
          type="text"
          placeholder="Search..."
          theme="dark"
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </li>
      <li className="mx-2 my-auto">
        <UserModal
          icon={icons.user.icon}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </li>
      <li className="mx-2 my-auto">
        <CartModal
          icon={icons.outlinedCart.icon}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </li>
    </ul>
  );
};
