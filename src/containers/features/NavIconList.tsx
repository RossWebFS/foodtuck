import { SearchInput } from "./SearchInput";

import { dishes, icons } from "src/constants";
import { UserModal } from "./UserModal";
import { CartModal } from "./CartModal";

export const NavIconList = () => {
 return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 border border-orange-400 rounded-full">
        <SearchInput
          state={dishes}
          IconComponent={icons.search.icon}
          type="text"
          placeholder="Search..."
          theme="dark"
        />
      </li>
      <li className="mx-2 my-auto">
        <UserModal icon={icons.user.icon} />
      </li>
      <li className="mx-2 my-auto">
        <CartModal icon={icons.cart.icon} />
      </li>
    </ul>
  );
};
