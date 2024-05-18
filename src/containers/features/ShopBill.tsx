import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";
import { icons } from "src/constants";
import { useProductStore } from "src/store/ProductStore";

export const ShopBill = () => {
  const bill = useProductStore((state) => state.bill);

  return (
    <section className="flex justify-center gap-5">
      <div className="w-1/2">
        <h2 className="font-semibold text-3xl mb-6">Total Bill</h2>
        <div className="border border-gray-300 rounded-t p-4 flex justify-between text-lg">
          <div>
            <p>Cart Subtotal:</p>
            <p>Shipping:</p>
          </div>
          <div className="text-end">
            <p>${Math.abs(+bill.toFixed(2))}</p>
            <p>${Math.abs(+(bill * 0.25).toFixed(2))}</p>
          </div>
        </div>
        <div className="font-semibold text-lg border border-gray-300 rounded-b flex justify-between p-4">
          <p>Total Amount:</p>
          <p>${Math.abs(+(bill * 1.25).toFixed(2))}</p>
        </div>
        <Link
          to="/checkout"
          variant="button"
          className="text-gray-100 text-center mt-6 py-3 w-full"
        >
          Proceed to Checkout{" "}
          <Icon
            IconComponent={icons.boxedCheck.icon}
            className="text-gray-100 hover:text-gray-100"
          />
        </Link>
      </div>
    </section>
  );
};
