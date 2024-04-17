import { useSearchInput } from "src/hooks/useSearchInput";
import { Input } from "src/components/Input";
import { Icon } from "src/components/Icon";
import { RiSearchLine } from "react-icons/ri";
import { cn } from "src/utils";
import { InputHTMLAttributes } from "react";

interface SearchInputProps {
  inputStyles?: string;
  iconStyles?: string;
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({
  inputStyles,
  iconStyles,
  ...props
}: SearchInputProps) => {
  const { searchValue, setSearchValue } = useSearchInput();

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
        {...props}
      />
      <Icon>
        <RiSearchLine className={iconStyles} size={20} />
      </Icon>
    </>
  );
};
