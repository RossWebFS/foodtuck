import { useState } from "react";

import { InputHTMLAttributes } from "react";

import { Input } from "src/components/Input";
import { Icon } from "src/components/Icon";

import { cn } from "src/utils";

interface SearchInputProps {
  IconComponent?: React.ElementType;
  inputStyles?: string;
  iconStyles?: string;
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({
  IconComponent,
  inputStyles,
  iconStyles,
  ...inputProps
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Input
        className={cn(
          "text-gray-100 py-2 px-4 border-none focus:outline-none",
          inputStyles
        )}
        value={searchValue}
        onChange={onSearchInputChange}
        {...inputProps}
      />
      {IconComponent && (
        <Icon
          IconComponent={IconComponent}
          className={cn("w-5 h-5", iconStyles)}
        />
      )}
    </>
  );
};
