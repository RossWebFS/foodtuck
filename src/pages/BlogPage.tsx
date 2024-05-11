import { blogs, footerIcons, icons, recentPosts, routes } from "src/constants";
import { RecentBlogList } from "src/containers/RecentBlogList";
import { Blog } from "src/containers/features/Blog";
import { FilterInput } from "src/containers/features/FilterInput";
import { IconList } from "src/containers/features/IconList";
import { PageIntro } from "src/containers/features/PageIntro";
import { Pagination } from "src/containers/features/Pagination";
import { RecentPosts } from "src/containers/features/RecentPosts";
import { UserCard } from "src/containers/features/UserCard";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { TData } from "src/types";

export const BlogPage = () => {
  const links = [routes.HOME, routes.BLOG];

  const blogCards = blogs.map((blog) => {
    return (
      <li className="my-10">
        <Blog blog={blog} />
      </li>
    );
  });

  const blogArr: TData[] = blogs.map(({ title, id, tags, img }) => {
    return { title, id, tags, img, baseUrl: "/blog" };
  });

  //   const media = [
  //     icons.facebook,
  //     icons.twitter,
  //     icons.instagram,
  //     icons.outlinedPinterest,
  //   ];

  return (
    <main className="py-20">
      <PageIntro title="Blog List" links={links} />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section className="w-2/3">
          <ul>{blogCards}</ul>

          <Pagination products={blogs.length} limit={1}/>
        </section>

        <section className="w-1/3 mt-10">
          <FilterInput
            inputStyles="bg-transparent border border-gray-200 py-[11px] px-6 focus:px-6 w-full"
            iconStyles="w-12 h-12"
            data={blogArr}
            placeholder="Search Blog.."
          />

          <UserCard />

          <div className="my-10 p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold">Recent Post</h3>
            <RecentPosts
              recentPosts={recentPosts}
              itemStyles="pb-3 border-b border-b-gray-200"
            />
          </div>

          <div className="my-10 p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Filter By Menu</h3>
            <ul>
              <li className="flex justify-between items-center my-5">
                <div className="flex items-center">
                  <img
                    src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
                    alt="post"
                    className="rounded-lg w-16 object-cover"
                  />
                  <h3 className="text-lg font-semibold ml-4">Dish</h3>
                </div>
                <span>0</span>
              </li>
              <li className="flex justify-between items-center my-5">
                <div className="flex items-center">
                  <img
                    src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
                    alt="post"
                    className="rounded-lg w-16 object-cover"
                  />
                  <h3 className="text-lg font-semibold ml-4">Dish</h3>
                </div>
                <span>0</span>
              </li>
              <li className="flex justify-between items-center my-5">
                <div className="flex items-center">
                  <img
                    src="https://meatandco.co.uk/cdn/shop/files/TheSteaksareHigh.jpg?v=1688629953"
                    alt="post"
                    className="rounded-lg w-16 object-cover"
                  />
                  <h3 className="text-lg font-semibold ml-4">Dish</h3>
                </div>
                <span>0</span>
              </li>
            </ul>
          </div>

          <div className="my-10 p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Popular Tags</h3>
            <ul className="flex gap-4 flex-wrap">
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
              <li className="px-4 py-1 border border-gray-200">Tag</li>
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
      </Wrapper>
    </main>
  );
};
