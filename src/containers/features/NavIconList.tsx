import { Link } from "react-router-dom";

import { Icon } from "src/components/Icon";
import { SearchInput } from "./SearchInput";

import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";

export const NavIconList = () => {
  return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 pr-3 border border-orange-400 rounded-full">
        <SearchInput
          IconComponent={RiSearchLine}
          type="text"
          placeholder="Search..."
        />
      </li>
      <li className="mx-2 my-auto">
        <Icon IconComponent={AiOutlineUser} className="w-5 h-5" />
      </li>
      <li className="mx-2 my-auto">
        <Link to="/cart">
          <Icon IconComponent={PiTote} className="w-5 h-5" />
        </Link>
      </li>
    </ul>
  );
};
