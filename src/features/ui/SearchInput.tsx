import { useSearchInput } from "src/hooks/useSearchInput";
import { Input } from "src/components/Input";
import { Icon } from "src/components/Icon";
import { RiSearchLine } from "react-icons/ri";


export const SearchInput = () => {
  const { searchValue, setSearchValue } = useSearchInput();

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Input
        className="text-gray-100 py-2 px-4 border-none focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchInputChange}
      />
      <Icon>
        <RiSearchLine size={20} />
      </Icon>
    </>
  );
};