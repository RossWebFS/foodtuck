import { SearchInput } from "./SearchInput";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import { Icon } from "src/components/Icon";
import { Link } from "react-router-dom";
import { ModalUserIcon } from "./ModalUserIcon";

export const NavIconList = () => {
  return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 pr-3 border border-orange-400 rounded-full">
        <SearchInput type="text" placeholder="Search..." />
      </li>
      <li className="mx-2 pt-1.5 my-auto">
        {/* <Icon>
          <AiOutlineUser size={20} />
        </Icon> */}
        <ModalUserIcon />
      </li>
      <li className="mx-2 pt-1.5 my-auto">
        <Link to="/cart">
          <Icon>
            <PiTote size={20} />
          </Icon>
        </Link>
      </li>
    </ul>
  );
};
