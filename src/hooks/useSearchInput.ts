import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TUseSearchInput } from "src/types";

export const useSearchInput = create(persist<TUseSearchInput>(
    (set) => ({
        searchValue: "",
        setSearchValue: (cur: string) =>
          set(
            (state) => ({
              searchValue: cur,
            }),
          )
      }), 
      {
        name: "searchValue",
        storage: createJSONStorage(() => localStorage)
      }
));
