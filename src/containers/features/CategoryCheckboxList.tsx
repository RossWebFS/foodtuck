import { ChangeEvent, useEffect, useState } from "react";
import { TFilterObject } from "src/types";

interface CategoryCheckboxListProps {
  categories: string[];
  filter: TFilterObject;
  filterHandler: (value: TFilterObject) => void;
}

export const CategoryCheckboxList = ({
  categories,
  filter,
  filterHandler,
}: CategoryCheckboxListProps) => {
  const [values, setValues] = useState<string[]>([]);
  const categoryFilterHandler = (
    e: ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      setValues((values) => [...values, category]);
    } else {
      setValues((values) => values.filter((item) => item !== category));
    }
  };

  useEffect(() => {
    filterHandler({ ...filter, categories: values });
  }, [values])

  const categoryCheckboxes = categories.map((category) => {
    return (
      <li className="flex my-2 items-center">
        <input
          id={`${category}-checkbox`}
          type="checkbox"
          className="accent-orange-600 mr-2 w-4 h-4"
          onChange={(e) => categoryFilterHandler(e, category)}
        />
        <label htmlFor={`#${category}-checkbox`}></label>
        {category}
      </li>
    );
  });

  return <ul>{categoryCheckboxes}</ul>;
};
