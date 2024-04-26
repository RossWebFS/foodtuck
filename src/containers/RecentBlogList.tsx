import { Wrapper } from "src/containers/layouts/Wrapper";
import { BlogCard } from "src/containers/features/BlogCard";

import { blogCards } from "src/constants";

export const RecentBlogList = () => {
  const blogCardListItems = blogCards.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        title={blog.title}
        date={blog.date}
        img={blog.img}
      />
    );
  });

  return (
    <Wrapper wrapStyles="py-16">
      <div className="text-center mb-12">
        <p className="great-vibes text-orange-400 text-2xl">Blog Post</p>
        <h2 className="text-5xl font-bold mt-3 mb-6">
          <span className="text-orange-400">Latest</span> News & Blogs
        </h2>
      </div>

      <ul className="flex justify-center gap-10">{blogCardListItems}</ul>
    </Wrapper>
  );
};
