import { useState } from "react";

export const useSearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // There'll be calculation

  return { searchValue, setSearchValue };
};
