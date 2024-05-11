import { SearchInputModal } from "./features/SearchInputModal";

import { blogs, icons } from "src/constants";
import { UserModal } from "./features/UserModal";
import { CartModal } from "./features/CartModal";
import { useState } from "react";
import { useProductStore } from "src/hooks/ProductStore";
import { TData } from "src/types";

export const NavIconList = () => {
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const products = useProductStore(state => state.products)

  const dishes: TData[] = products.map(({title, id, tags, img}) => {
    return {title, id, tags, img, baseUrl: "/shop-details"}
  })
  const blogArr: TData[] = blogs.map(({title, id, tags, img}) => {
    return {title, id, tags, img, baseUrl: "/blog"}
  })

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
        <UserModal
          icon={icons.outlinedUser.icon}
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
