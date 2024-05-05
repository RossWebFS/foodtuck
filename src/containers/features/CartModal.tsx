import { useState } from "react";
import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";
import { cn } from "src/utils";

interface CartModalProps {
  icon: React.ElementType;
  activeModal?: null | string;
  setActiveModal: (value: null | string) => void;
}

export const CartModal = ({
  icon,
  activeModal,
  setActiveModal,
}: CartModalProps) => {

  return (
    <div>
      <Icon
        IconComponent={icon}
        className={cn("w-5 h-5", {
          "text-orange-400": activeModal === "cart",
        })}
        onClick={() => {
          activeModal === "cart"
            ? setActiveModal(null)
            : setActiveModal("cart");
        }}
      />
      <div
        className={cn(
          "absolute w-64 h-72 top-14 bg-black -translate-x-[70%] rounded-xl border p-4 flex",
          {
            hidden: activeModal !== "cart" || !activeModal,
          }
        )}
      >
        {activeModal === "cart" && <div className="w-full">
          <h4 className="mb-3 text-xl">Cart details</h4>
          <p>Wish list count:</p>
          <p className="mt-1 mb-3">Cart list count</p>
          <Link
            to="/cart"
            variant="button"
            rounded="default"
            className="block mx-auto w-fit"
          >
            Visit a cart
          </Link>
        </div>}
      </div>
    </div>
  );
};
