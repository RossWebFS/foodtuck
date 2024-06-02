import { SearchInputModal } from "./features/SearchInputModal";

import { blogs, icons } from "src/constants";
import { CartModal } from "./features/CartModal";
import { useState } from "react";
import { useProductStore } from "src/store/ProductStore";
import { TData } from "src/types";
import { Link } from "src/components/Link";
import { Icon } from "src/components/Icon";
import { useUserStore } from "src/store/UserStore";

export const NavIconList = () => {
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const products = useProductStore((state) => state.products);
  const [isAuth, user] = useUserStore(state => [state.isAuth, state.user])

  const dishes: TData[] = products.map(({ title, _id, tags, img }) => {
    return { title, _id, tags, img, baseUrl: "/shop-details" };
  });
  const blogArr: TData[] = blogs.map(({ title, _id, tags, img }) => {
    return { title, _id, tags, img, baseUrl: "/blog-details" };
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
        <Link variant="colored" to={isAuth ? `/profile/${user?.id}` : "/sign-up"}>
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
