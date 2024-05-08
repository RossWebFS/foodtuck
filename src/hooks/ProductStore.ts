import { dishes } from "src/constants";
import { TDish, TDishCount } from "src/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TProductStore {
  products: TDishCount[];
  cart: TDishCount[];
  wishList: TDishCount[];
  bill: number;
  addToCart: (value: TDishCount) => void;
  addToWishList: (value: TDishCount) => void;
  removeFromCart: (value: TDishCount) => void;
  removeFromWishList: (value: TDishCount) => void;
  increaseCartDish: (dish: TDishCount) => void;
  decreaseCartDish: (dish: TDishCount) => void;
  addBill: (price: TDishCount) => void;
  subtractBill: (price: TDishCount) => void;
}

export const useProductStore = create(
  persist<TProductStore>(
    (set, get) => ({
      bill: 0,
      products: dishes,
      cart: [],
      wishList: [],
      addToCart: (dish) => {
        const { cart } = get();
        dish.count = 0
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
        const { cart, bill } = get();

        set({
          bill: bill - dish.price * dish.count,
          cart: cart.filter((item) => item.title !== dish.title),
        });
      },
      removeFromWishList: (dish) => {
        const { wishList } = get();

        set({
          wishList: wishList.filter((item) => item.title !== dish.title),
        });
      },
      increaseCartDish: (dish) => {
        const { cart } = get();

        set({
          cart: cart.map((item) => {
            if (item.title === dish.title) item.count++;
            return item;
          }),
        });
      },
      decreaseCartDish: (dish) => {
        const { cart } = get();

        set({
          cart: cart.map((item) => {
            if (item.title === dish.title) item.count--;
            return item;
          }),
        });
      },
      addBill: (dish) => {
        const { bill } = get();

        set({
          bill: Math.abs(bill + dish.price),
        });
      },
      subtractBill: (dish) => {
        const { bill } = get();

        set({
          bill: Math.abs(bill - dish.price),
        });
      },
    }),
    {
      name: "Products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
