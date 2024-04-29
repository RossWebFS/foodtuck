import { useState } from "react";

import { productTags } from "src/constants";
import { cn } from "src/utils";

export const ProductTags = () => {
  const [activeTag, setActiveTag] = useState("");

  const productTagLinks = productTags.map((tag) => {
    return (
      <li
        className={cn(
          "border-b border-b-gray-100 text-gray-500 cursor-pointer",
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
    <ul className="flex gap-3 flex-wrap text-lg w-[80%]">{productTagLinks}</ul>
  );
};
