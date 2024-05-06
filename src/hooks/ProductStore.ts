import { dishes } from "src/constants";
import { TDish } from "src/types";
import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

interface TProductStore {
  products: TDish[];
  cart: TDish[];
  wishList: TDish[];
  addToCart: (value: TDish) => void;
  addToWishList: (value: TDish) => void;
  removeFromCart: (value: TDish) => void;
  removeFromWishList: (value: TDish) => void;
}

export const useProductStore = create<TProductStore>(
//   persist<TProductStore>(
    (set, get) => ({
      products: dishes,
      cart: [],
      wishList: [],
      addToCart: (dish) => {
        const { cart } = get();

        set({
          cart: [...cart, dish],
        });
      },
      addToWishList: (dish) => {
        const { wishList } = get();

        set({
          wishList: [...wishList, dish],
        });
      },
      removeFromCart: (dish) => {
        const { cart } = get();

        set({
          cart: cart.filter((item) => item !== dish),
        });
      },
      removeFromWishList: (dish) => {
        const { wishList } = get();

        set({
          wishList: wishList.filter((item) => item !== dish),
        });
      },
    }),
//     {
//       name: "Products",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
);
