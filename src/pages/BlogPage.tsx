import { blogs, routes } from "src/constants";
import { Blog } from "src/containers/features/Blog";
import { PageIntro } from "src/containers/features/PageIntro";
import { Pagination } from "src/containers/features/Pagination";
import { BlogSidebar } from "src/containers/layouts/BlogSidebar";
import { Wrapper } from "src/containers/layouts/Wrapper";

export const BlogPage = () => {
  const links = [routes.HOME, routes.BLOG];

  const blogCards = blogs.map((blog) => {
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
          <ul>{blogCards}</ul>

          <Pagination products={blogs.length} limit={1}/>
        </section>

        <BlogSidebar />
      </Wrapper>
    </main>
  );
};
