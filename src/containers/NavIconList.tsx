import { SearchInputModal } from "./features/SearchInputModal";

import { dishes, icons } from "src/constants";
import { UserModal } from "./features/UserModal";
import { CartModal } from "./features/CartModal";
import { useState } from "react";

export const NavIconList = () => {
  const [activeModal, setActiveModal] = useState<null | string>(null);

  return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 border border-orange-400 rounded-full">
        <SearchInputModal
          state={dishes}
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
          icon={icons.cart.icon}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </li>
    </ul>
  );
};
