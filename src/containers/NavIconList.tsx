import { SearchInputModal } from "./features/SearchInputModal";

import { blogs, icons } from "src/constants";
import { UserModal } from "./features/UserModal";
import { CartModal } from "./features/CartModal";
import { useState } from "react";
import { useProductStore } from "src/store/ProductStore";
import { TData } from "src/types";
import { Link } from "src/components/Link";
import { Icon } from "src/components/Icon";

export const NavIconList = () => {
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const products = useProductStore((state) => state.products);

  const dishes: TData[] = products.map(({ title, _id, tags, img }) => {
    return { title, _id, tags, img, baseUrl: "/shop-details" };
  });
  const blogArr: TData[] = blogs.map(({ title, _id, tags, img }) => {
    return { title, _id, tags, img, baseUrl: "/blog" };
  });

  return (
    <ul className="flex">
      <li className="bg-black flex items-center mx-2 border border-orange-400 rounded-full">
        <SearchInputModal
          data={[...dishes, ...blogArr]}
          IconComponent={icons.search.icon}
          type="text"
          placeholder="Search..."
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </li>
      <li className="mx-2 my-auto">
        {/* <UserModal
          icon={icons.outlinedUser.icon}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        /> */}
        <Link variant="colored" to="/profile">
          <Icon
            onClick={() => setActiveModal(null)}
            IconComponent={icons.outlinedUser.icon}
            className="w-5 h-5"
          />
        </Link>
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
