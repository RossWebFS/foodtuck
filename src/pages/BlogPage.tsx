import { useEffect, useState } from "react";
import { routes } from "src/constants";
import { Blog } from "src/containers/features/Blog";
import { PageIntro } from "src/containers/features/PageIntro";
import { Pagination } from "src/containers/features/Pagination";
import { BlogSidebar } from "src/containers/layouts/BlogSidebar";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { useBlogStore } from "src/store/BlogStore";
import { TBlog } from "src/types";

export const BlogPage = () => {
  const [blogs, filteredBlogs, getBlogs] = useBlogStore((state) => [
    state.blogs,
    state.filteredBlogs,
    state.getBlogs,
  ]);
  const [page, setPage] = useState<number>(1);
  const [activeBlogs, setActiveBlogs] = useState<TBlog[]>(filteredBlogs);

  const links = [routes.HOME, routes.BLOG];
  const limit = 2;

  useEffect(() => {
    !filteredBlogs.length && getBlogs && getBlogs();
  }, []);

  useEffect(() => {
    filteredBlogs.length < blogs.length && setPage(1)
    activeBlogs.length && setActiveBlogs(filteredBlogs);
        const res = limit
      && page > 1
        ? filteredBlogs.slice(limit * (page - 1), limit * page)
        : filteredBlogs.slice(0, limit)
    setActiveBlogs(res);
  }, [filteredBlogs, page]);

  const blogCards = activeBlogs.map((blog) => {
    return (
      <li className="my-10">
        <Blog blog={blog} />
      </li>
    );
  });

  return (
    <main className="py-20">
      <PageIntro title="Blog List" links={links} />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section className="w-2/3">
          <ul className="h-[100rem]">{blogCards}</ul>

          <Pagination
            products={filteredBlogs.length}
            limit={2}
            filterHandler={setPage}
            filter={filteredBlogs.length < blogs.length && page || 0}
          />
        </section>

        <BlogSidebar />
      </Wrapper>
    </main>
  );
};
