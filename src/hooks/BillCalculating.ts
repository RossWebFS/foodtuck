import { useState } from "react";

export const useBillCalculating = () => {
  const [bill, setBill] = useState(0);

  const subtractBill = (price: number, count: number) => {
    setBill((prev) => prev - price * (count || 1));
  };

  function addBill(price: number, count: number) {
    setBill((prev) => prev + price * (count || 1));
  };

  return [bill, setBill, subtractBill, addBill];
};
