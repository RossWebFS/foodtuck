import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { useBillCalculating } from "src/hooks/BillCalculating";

export const ShopBill = () => {
  const [bill] = useBillCalculating();

  return (
    <section className="flex gap-5">
      <div className="w-1/2">
        <h2 className="font-semibold text-3xl mb-6">Coupon Code</h2>
        <div className="border border-gray-300 rounded p-4">
          <p className="text-gray-500 w-4/5 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse
            a, fugit voluptatibus blanditiis tenetur eum incidunt enim
          </p>
          <form>
            <Input
              className="outline-orange-400 w-96 h-12"
              placeholder="Enter Here Code.."
            />
            <Button
              rounded="default"
              className="z-10 mt-0.5 -translate-x-2 h-12"
            >
              Apply
            </Button>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="font-semibold text-3xl mb-6">Total Bill</h2>
        <div className="border border-gray-300 rounded p-4 flex justify-between">
          <div>
            <p className="font-semibold text-lg">Total Amount:</p>
            <p>Shipping:</p>
          </div>
          <div>
            <p className="font-semibold text-lg">{`$${bill}`}</p>
            <p>free</p>
          </div>
        </div>
      </div>
    </section>
  );
};
