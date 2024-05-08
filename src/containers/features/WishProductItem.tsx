import { Icon } from "src/components/Icon";
import { Rating } from "src/components/Rating";
import { icons } from "src/constants";
import { useProductStore } from "src/hooks/ProductStore";
import { TDishCount } from "src/types";

interface WishProductItemProps {
  product: TDishCount;
}

export const WishProductItem = ({ product }: WishProductItemProps) => {
  const [removeFromWishList] = useProductStore((state) => [
    state.removeFromWishList,
  ]);

  return (
    <tr className="border-b border-b-gray-200">
      <td className="flex py-2">
        <img className="w-16 h-16 mr-2" src={product.img} alt={product.title} />
        <div>
          <h4 className="font-semibold">{product.title}</h4>
          <span>
            <Rating rating={product.rating} />
          </span>
          <span>{product.receipe.join(", ")}</span>
        </div>
      </td>
      <td className="text-center">{product.category.join(", ")}</td>
      <td className="py-2 text-center">${product.price}</td>
      <td className="text-center py-2">
        <Icon
          IconComponent={icons.close.icon}
          className="text-gray-800"
          onClick={() => removeFromWishList(product)}
        />
      </td>
    </tr>
  );
};
