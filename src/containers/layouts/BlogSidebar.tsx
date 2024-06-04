import { footerIcons, foodCategories } from "src/constants";
import { FilterInput } from "../features/FilterInput";
import { IconList } from "../features/IconList";
import { RecentPosts } from "../features/RecentPosts";
import { TData } from "src/types";
import { cn, getRecentBlogs } from "src/utils";
import { useBlogStore } from "src/store/BlogStore";
import { useEffect, useState } from "react";

export const BlogSidebar = () => {
  const [blogs, getBlogs, filterBlogs] = useBlogStore((state) => [
    state.blogs,
    state.getBlogs,
    state.filterBlogs
  ]);
  const [activeFilter, setActiveFilter] = useState<null | string>(null);

  useEffect(() => {
    !blogs.length && getBlogs && getBlogs();
  }, []);

  useEffect(() => {
    filterBlogs && filterBlogs(activeFilter)
  }, [activeFilter])

  const blogArr: TData[] = blogs.map(({ title, _id, tags, img }) => {
    return { title, _id, tags, img: img[0], baseUrl: "/blog-details" };
  });

  const tags = blogs
    .map((blog) => blog.tags.join(", "))
    .join(", ")
    .split(", ");

  const filteredCategories = foodCategories.filter((category) =>
    tags.includes(category)
  );

  const blogList = filteredCategories.map((category) => {
    const filteredBlogItems = blogs.filter((blog) =>
      blog.tags.includes(category)
    );
    return (
      <li
        className={cn(
          "flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-100",
          {
            "bg-gray-100": activeFilter === category,
          }
        )}
        onClick={() =>
          activeFilter === category
            ? setActiveFilter(null)
            : setActiveFilter(category)
        }
      >
        <div className="flex items-center">
          <img
            src={filteredBlogItems[0].img[0]}
            alt="post"
            className="rounded-lg w-16 h-16 object-cover"
          />
          <h3 className="text-lg font-semibold ml-4">{category}</h3>
        </div>
        <span>{filteredBlogItems.length}</span>
      </li>
    );
  });

  return (
    <section className="w-1/3 mt-10">
      <FilterInput
        inputStyles="bg-transparent border border-gray-200 py-[11px] px-6 focus:px-6 w-full"
        iconStyles="w-12 h-12"
        data={blogArr}
        placeholder="Search Blog.."
      />

      <div className="my-10 p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold">Recent Post</h3>
        <RecentPosts
          recentPosts={getRecentBlogs(blogs, 4)}
          itemStyles="pb-3 border-b border-b-gray-200 hover:text-black"
        />
      </div>

      <div className="my-10 p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6">Filter By Menu</h3>
        <ul>{blogList}</ul>
      </div>

      <div className="my-10 p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6">Popular Tags</h3>
        <ul className="flex gap-4 flex-wrap">
          {tags.slice(0, 8).map((tag) => (
            <li className="px-4 py-1 border border-gray-200">{tag}</li>
          ))}
        </ul>
      </div>

      <div className="my-10 p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6">Photo Galery</h3>
        <ul className="flex flex-wrap gap-4">
          <li>
            <img
              src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
              alt="photo"
              className="w-24 h-24 object-cover aspect-square"
            />
          </li>
          <li>
            <img
              src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
              alt="photo"
              className="w-24 h-24 object-cover aspect-square"
            />
          </li>
          <li>
            <img
              src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
              alt="photo"
              className="w-24 h-24 object-cover aspect-square"
            />
          </li>
          <li>
            <img
              src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
              alt="photo"
              className="w-24 h-24 object-cover aspect-square"
            />
          </li>
        </ul>
      </div>

      <div className="my-10 p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>

        <IconList
          iconStyles="w-5 h-5 text-gray-700 group-hover:text-gray-100 transition-all duration-200"
          listStyles="justify-center w-full"
          listItemStyles="bg-orange-50 py-2.5 px-3 hover:bg-orange-400 group transition-all duration-200"
          icons={footerIcons}
        />
      </div>
    </section>
  );
};
