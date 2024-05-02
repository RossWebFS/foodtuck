import { Link } from "src/components/Link";

import { Icon } from "src/components/Icon";
import { SearchInput } from "./SearchInput";

import { dishes, icons } from "src/constants";

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
        <Icon IconComponent={icons.user.icon} className="w-5 h-5" />
      </li>
      <li className="mx-2 my-auto">
        <Link to="/cart">
          <Icon IconComponent={icons.cart.icon} className="w-5 h-5" />
        </Link>
      </li>
    </ul>
  );
};
