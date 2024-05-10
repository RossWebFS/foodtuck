import { useState } from "react";
import { Icon } from "src/components/Icon";
import { Rating } from "src/components/Rating";
import { icons } from "src/constants";
import { TDishCount } from "src/types";
import { Counter } from "./Counter";
import { useProductStore } from "src/hooks/ProductStore";

interface ProductCartItemProps {
  product: TDishCount;
}

export const ProductCartItem = ({ product }: ProductCartItemProps) => {
  const [removeFromCart, increaseDishCount, decreaseDishCount] = useProductStore(
    (state) => [
      state.removeFromCart,
      state.increaseDishCount,
      state.decreaseDishCount,
    ]
  );
  const [addBill, subtractBill] = useProductStore((state) => [
    state.addBill,
    state.subtractBill,
  ]);

  const onAdd = () => {
    addBill(product);
    increaseDishCount(product);
  };
  const onSubtract = () => {
    subtractBill(product);
    decreaseDishCount(product);
  };

  return (
    <tr className="border-b border-b-gray-200">
      <td className="flex py-2">
        <img className="w-16 h-16 mr-2" src={product.img} alt={product.title} />
        <div>
          <h4 className="font-semibold">{product.title}</h4>
          <span>
            <Rating rating={product.rating} />
          </span>
        </div>
      </td>
      <td className="py-2 text-center">${product.price}</td>
      <td className="py-2 text-center">
        <Counter
          onAdd={onAdd}
          onSubract={onSubtract}
          counter={product.count}
          downStyles="text-lg py-0.5 px-3 rounded-l-3xl"
          counterStyle="text-lg py-0.5 px-3"
          upStyles="text-lg py-0.5 px-3 rounded-r-3xl"
        />
      </td>
      <td className="py-2 text-center">
        ${(product.price * product.count).toFixed(2)}
      </td>
      <td className="text-center py-2">
        <Icon
          IconComponent={icons.close.icon}
          className="text-gray-800"
          onClick={() => removeFromCart(product)}
        />
      </td>
    </tr>
  );
};
