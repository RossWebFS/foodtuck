import { blogs, routes } from "src/constants";
import { Blog } from "src/containers/features/Blog";
import { FilterInput } from "src/containers/features/FilterInput";
import { PageIntro } from "src/containers/features/PageIntro";
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
    <main className="pt-10">
      <PageIntro title="Blog List" links={links} />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section className="w-2/3">
          <ul>{blogCards}</ul>
        </section>

        <section>
          <FilterInput data={blogs} placeholder="Search Blog.." />

          {/* <section className="flex flex-col items-center">
            <img
              src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
              alt="user"
            />
            <h3>User</h3>
            <p>status</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              accusamus itaque ducimus rem reiciendis molestias perferendis,
              dignissimos doloremque est ab.
            </p>
            <ul>links..</ul>
          </section> */}
        </section>
      </Wrapper>
    </main>
  );
};
