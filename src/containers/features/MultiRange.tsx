import { useEffect, useState } from "react";
import Slider from "react-slider";
import { TFilterObject } from "src/types";

interface MultiRangeProps {
  filter: TFilterObject;
  filterHandler: (value: TFilterObject) => void;
}

export const MultiRange = ({filter, filterHandler}: MultiRangeProps) => {
  const MIN = 0;
  const MAX = 50;
  const [values, setValues] = useState([MIN, MAX]);

  useEffect(() => {
    filterHandler({...filter, price: values})
  }, [values])

  return (
    <div>
      <Slider
        value={values}
        onChange={setValues}
        min={MIN}
        max={MAX}
        className="h-1.5 w-full bg-orange-100 rounded"
        thumbClassName="w-4 h-4 border-2 border-gray-100 -top-1 rounded-full bg-orange-400 focus:bg-orange-500 focus:outline-none cursor-grab"
        pearling
      />
      <div className="flex justify-between text-gray-500 mt-3">
        <span>
          From ${values[0]} to ${values[1]}
        </span>
        <span>Filter</span>
      </div>
    </div>
  );
};
