import { useEffect, useState } from "react";

import { productTags } from "src/constants";
import { TFilterObject } from "src/types";
import { cn } from "src/utils";

interface ProductTagsProps {
  filter: TFilterObject;
  filterHandler: (value: TFilterObject) => void;
}

export const ProductTags = ({ filter, filterHandler }: ProductTagsProps) => {
  const [activeTag, setActiveTag] = useState("Select All");

  useEffect(() => {
    filterHandler({...filter, tag: activeTag})
  }, [activeTag])

  const productTagLinks = productTags.map((tag) => {
    return (
      <li
        className={cn(
          "border-b border-b-gray-100 text-gray-500 cursor-pointer hover:text-orange-400 transition-colors duration-200",
          {
            "border-b-orange-400 text-orange-400": activeTag === tag,
          }
        )}
        onClick={() => setActiveTag(tag)}
      >
        {tag}
      </li>
    );
  });
  return (
    <ul className="flex gap-3 flex-wrap text-lg w-[80%]">
      {productTagLinks}
    </ul>
  );
};
