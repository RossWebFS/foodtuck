import { useState } from "react";
import { InputHTMLAttributes } from "react";

import { Input } from "src/components/Input";
import { Icon } from "src/components/Icon";

import { cn } from "src/utils";
import { Link } from "src/components/Link";
import { useProductStore } from "src/hooks/ProductStore";

interface SearchInputProps {
  IconComponent?: React.ElementType;
  iconStyles?: string;
  inputStyles?: string;
  theme?: "dark" | "light";
  activeModal?: null | string;
  setActiveModal: (value: null | string) => void;
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInputModal = ({
  IconComponent,
  iconStyles,
  inputStyles,
  theme = "light",
  activeModal,
  setActiveModal,
  ...inputProps
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const products = useProductStore((state) => state.products);

  const highlightText = (text: string[]) => {
    return text.map((part: string) => {
      return part.toLowerCase() === searchValue.toLowerCase() ? (
        <span
          className={cn("font-semibold", {
            "hover:text-gray-100": theme === "dark",
            "hover:text-black": theme === "light",
          })}
        >
          {part}
        </span>
      ) : (
        <span>{part}</span>
      );
    });
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    e.target.value && setActiveModal("search");
  };

  const searchResult = products.filter((data) => {
    const value = searchValue.toLowerCase();
    return (
      data.title.toLowerCase().includes(value) ||
      data.tags.join(" ").toLowerCase().includes(value)
    );
  });

  const searchListItems = searchResult.map((data) => {
    const highlightedTitle = data.title.split(
      new RegExp(`(${searchValue})`, "gi")
    );
    const highlightedTags = data.tags
      .join(" ")
      .split(new RegExp(`(${searchValue})`, "gi"));
    return (
      <li
        className={cn("my-2 flex", {
          "text-gray-200 hover:bg-gray-100/10": theme === "dark",
          "text-gray-950 hover:bg-gray-200/60": theme === "light",
        })}
      >
        {" "}
        <img className="w-12 h-12 mr-2" src={data.img} alt={data.title} />
        <div>
          <Link to="/">
            <h4 className="text-lg">{highlightText(highlightedTitle)}</h4>
          </Link>
          <p>{highlightText(highlightedTags)}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="flex items-center relative">
      <Input
        className={cn(
          "text-gray-100 py-2 px-4 border-0 focus:outline-none",
          inputStyles
        )}
        value={searchValue}
        onChange={onSearchInputChange}
        onClick={() => {
          activeModal === "search"
            ? setActiveModal(null)
            : setActiveModal("search");
        }}
        {...inputProps}
      />
      {IconComponent && (
        <Icon
          IconComponent={IconComponent}
          className={cn("w-5 h-5 mr-3", {
            "text-orange-400": activeModal === "search",
          })}
          onClick={() => {
            activeModal === "search"
              ? setActiveModal(null)
              : setActiveModal("search");
          }}
        />
      )}
      <div
        className={cn(
          "absolute w-full h-72 top-11 rounded-xl border p-4 flex items-center",
          {
            hidden: activeModal !== "search" || !activeModal,
            "bg-black": theme === "dark",
            "bg-white text-black": theme === "light",
          }
        )}
      >
        {activeModal === "search" && !searchResult.length ? (
          <p className="mx-auto">No suggestion..</p>
        ) : (
          <ul className="h-full w-full overflow-y-auto coloredScrollbar text-gray-100/15">
            {searchListItems}
          </ul>
        )}
      </div>
    </div>
  );
};
