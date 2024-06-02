import { InputHTMLAttributes, useState } from "react";
import { Icon } from "src/components/Icon";
import { Input } from "src/components/Input";
import { Link } from "src/components/Link";
import { icons } from "src/constants";
import { TData, TFilterObject } from "src/types";
import { cn } from "src/utils";

interface FilterInputProps extends InputHTMLAttributes<HTMLInputElement> {
  data: TData[];
  filter?: TFilterObject;
  filterHandler?: (value: TFilterObject) => void;
  iconStyles?: string;
  inputStyles?: string;
}

export const FilterInput = ({
  filter,
  filterHandler,
  data,
  iconStyles,
  inputStyles,
  ...props
}: FilterInputProps) => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const highlightText = (text: string[]) => {
    return text.map((part: string) => {
      return part.toLowerCase() === searchValue.toLowerCase() ? (
        <span className="font-semibold hover:text-gray-100">{part}</span>
      ) : (
        <span>{part}</span>
      );
    });
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    e.target.value && setIsActiveModal(true);

    filter &&
      filterHandler &&
      filterHandler({ ...filter, search: e.target.value });
  };

  const searchResult = data.filter((item) => {
    const { title, tags } = item;
    const value = searchValue.toLowerCase();
    return (
      title.toLowerCase().includes(value) ||
      tags.join(" ").toLowerCase().includes(value)
    );
  });

  const searchListItems = searchResult.map((data) => {
    const { title, img, _id, tags } = data;
    const highlightedTitle = title.split(new RegExp(`(${searchValue})`, "gi"));

    const highlightedTags = tags
      .join(" ")
      .split(new RegExp(`(${searchValue})`, "gi"));
    return (
      <li className="my-2 text-black hover:bg-gray-200 cursor-pointer">
        <Link
          className="text-lg hover:text-black flex"
          to={`${data.baseUrl}/${_id}`}
        >
          <img className="w-12 h-12 mr-2" src={img} alt={title} />
          <div>
            <h4>{highlightText(highlightedTitle)}</h4>
            <p>{highlightText(highlightedTags)}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="flex relative">
      <Input
        type="text"
        placeholder="Search Product"
        className={cn(
          `text-gray-500 
        bg-orange-100  
        py-2 px-4 
        border-0 
        focus:bg-white 
        focus:outline-none 
        focus:border 
        focus:border-orange-400 
        focus:py-[7.25px] 
        focus:px-[15.5px]`,
          inputStyles
        )}
        onChange={onSearchInputChange}
        onClick={() => setIsActiveModal(!isActiveModal)}
        {...props}
      />
      <Icon
        IconComponent={icons.search.icon}
        variant="boxed"
        className={cn(
          "mr-3 w-10 h-10 p-3 rounded-none hover:bg-orange-500 hover:text-gray-100",
          iconStyles
        )}
        onClick={() => setIsActiveModal(!isActiveModal)}
      />

      <div
        className={cn(
          "absolute w-full h-72 top-11 rounded-xl border p-4 flex items-center bg-white tex-black shadow-lg",
          {
            hidden: !isActiveModal,
          }
        )}
      >
        {isActiveModal && !searchResult.length ? (
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
