import { blogService } from "src/services/Blogs";
import { TBlog } from "src/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TUseBlogStore {
  blogs: TBlog[] | [];
  getBlogs: () => void;
}

export const useBlogStore = create(
  persist<TUseBlogStore>(
    (set) => ({
      blogs: [],
      getBlogs: async () => {
        set({
          blogs: await blogService.getBlogs(),
        });
      },
    }),
    {
      name: "Blogs",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
