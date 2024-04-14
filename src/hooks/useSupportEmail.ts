import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TUseSupportByEmail } from "src/types";

export const useSupportEmail = create(persist<TUseSupportByEmail>(
    (set) => ({
        emailValue: "",
        setEmailValue: (cur: string) =>
          set(() => ({
            emailValue: cur,
          })),
      }), 
      {
        name: "supportEmail",
        storage: createJSONStorage(() => localStorage)
      }
));
