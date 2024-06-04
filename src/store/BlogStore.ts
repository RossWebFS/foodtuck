import { blogService } from "src/services/Blogs";
import { TBlog } from "src/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TUseBlogStore {
  blogs: TBlog[] | [];
  getBlogs?: () => void;
  filteredBlogs: TBlog[] | [];
  filterBlogs?: (category: string | null) => void;
}

export const useBlogStore = create(
  persist<TUseBlogStore>(
    (set, get) => ({
      blogs: [],
      filteredBlogs: [],
      getBlogs: async () => {
        set({
          blogs: await blogService.getBlogs(),
          filteredBlogs: await blogService.getBlogs(),
        });
      },
      filterBlogs: (category: string | null) => {
        const { blogs } = get();
        category
          ? set({
              filteredBlogs: blogs.filter((blog) =>
                blog.tags.includes(category)
              ),
            })
          : set({
              filteredBlogs: blogs,
            });
      },
    }),
    {
      name: "Blogs",
      partialize: (state: TUseBlogStore) => ({ blogs: state.blogs, filteredBlogs: state.filteredBlogs }),
    }
  )
);
