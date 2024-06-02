import { useCallback, useEffect, useMemo, useState } from "react";
import { routes } from "src/constants";
import { Blog } from "src/containers/features/Blog";
import { PageIntro } from "src/containers/features/PageIntro";
import { Pagination } from "src/containers/features/Pagination";
import { BlogSidebar } from "src/containers/layouts/BlogSidebar";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { useBlogStore } from "src/store/BlogStore";

export const BlogPage = () => {
  const [blogs, getBlogs] = useBlogStore((state) => [
    state.blogs,
    state.getBlogs,
  ]);

  useEffect(() => {
    !blogs.length && getBlogs();
  }, [blogs]);

  const links = [routes.HOME, routes.BLOG];
  const limit = 2;

  const [page, setPage] = useState<number>(1);

  const blogCards = useMemo(
    () =>
      blogs.map((blog) => {
        return (
          <li className="my-10">
            <Blog blog={blog} />
          </li>
        );
      }),
    [blogs]
  );

  const filterBlogs = useCallback(() => {
    return limit
      ? page > 1
        ? blogCards.slice(limit * (page - 1), limit * page)
        : blogCards.slice(0, limit)
      : blogCards;
  }, [page, blogs]);

  return (
    <main className="py-20">
      <PageIntro title="Blog List" links={links} />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section className="w-2/3">
          <ul className="h-[100rem]">{filterBlogs()}</ul>

          <Pagination
            products={blogs.length}
            limit={2}
            filterHandler={setPage}
            filter={page}
          />
        </section>

        <BlogSidebar />
      </Wrapper>
    </main>
  );
};
