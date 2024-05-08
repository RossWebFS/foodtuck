import { useState } from "react";
import { Icon } from "src/components/Icon";
import { Rating } from "src/components/Rating";
import { icons } from "src/constants";
import { TDish } from "src/types";
import { cn } from "src/utils";
import { Counter } from "./Counter";

interface ProductCartItemProps {
  product: TDish;
}

export const ProductCartItem = ({ product }: ProductCartItemProps) => {
  const [counter, setCounter] = useState<number>(0);

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
          counter={counter}
          setCounter={setCounter}
          downStyles="text-lg py-0.5 px-3 rounded-l-3xl"
          counterStyle="text-lg py-0.5 px-3"
          upStyles="text-lg py-0.5 px-3 rounded-r-3xl"
        />
      </td>
      <td className="py-2 text-center">
        ${(product.price * counter).toFixed(2)}
      </td>
      <td className="text-center py-2">
        <Icon IconComponent={icons.close.icon} className="text-gray-800" />
      </td>
    </tr>
  );
};
