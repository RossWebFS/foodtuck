import { useParams } from "react-router-dom";
import { Icon } from "src/components/Icon";
import { blogs, comments, icons, routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { BlogSidebar } from "src/containers/layouts/BlogSidebar";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { Comment } from "src/containers/features/Comment";
import { useUserStore } from "src/store/UserStore";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { formDate } from "src/utils";

export const BlogSinglePage = () => {
  const { blogId } = useParams();
  const user = useUserStore((state) => state.user);

  const url = encodeURI(window.location.href);

  const links = [
    routes.HOME,
    { ...routes.BLOG_DETAILS, path: `${routes.BLOG_DETAILS.path}/${blogId}` },
  ];

  const blog = blogs.find((blogItem) => blogItem._id === blogId);
  const [day, month, year] = formDate(blog && new Date(blog.date)).split(" ");
  const shareIcons = [
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      target="_blank"
    >
      <Icon
        IconComponent={icons.facebook.icon}
        className="text-gray-800 w-6 h-6"
      />
    </a>,
    <a
      href={`https://twitter.com/intent/tweet?text=Check+this+out&url=${url}`}
      target="_blank"
    >
      <Icon
        IconComponent={icons.twitter.icon}
        className="text-gray-800 w-6 h-6"
      />
    </a>,
    <a
      href={`https://pinterest.com/pin/create/button/?url=${url}`}
      target="_blank"
    >
      <Icon
        IconComponent={icons.outlinedPinterest.icon}
        className="text-gray-800 w-6 h-6"
      />
    </a>,
  ];

  return (
    <main className="py-20">
      <PageIntro links={links} title="Blog Details" />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        {blog && (
          <section className="w-2/3">
            <img
              className="object-cover w-full h-[30rem]"
              src={blog.img}
              alt={blog.title}
            />
            <ul className="flex gap-2 py-3">
              <li>
                <Icon
                  IconComponent={icons.outlinedCalendar.icon}
                  className="text-orange-400 mr-2"
                />
                {`${day} ${month}, ${year} /`}
              </li>
              <li>
                <Icon
                  IconComponent={icons.outlinedComments.icon}
                  className="text-orange-400 mr-2"
                />
                {blog.comments.length}
              </li>
            </ul>
            <h2 className="pb-6 w-3/4 border-b border-b-gray-200 text-2xl font-semibold">
              {blog.title}
            </h2>
            <article className="my-6">{blog.description}</article>
            <section className="p-5 border border-gray-300 flex justify-between">
              <div className="flex items-center gap-1 text-lg">
                <h3 className="font-semibold">Tags:</h3>
                <ul>
                  {blog.tags
                    .join(", ")
                    .split(" ")
                    .map((tag) => (
                      <li className="mx-2">{tag}</li>
                    ))}
                </ul>
              </div>
              <div className="flex gap-1">
                <h3 className="text-lg font-semibold">Share:</h3>
                <ul className="flex gap-2">
                  {shareIcons.map((icon) => (
                    <li>{icon}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-semibold">
                Comments - {blog.comments.length}
              </h2>
              <Comment comment={comments[0]} />
            </section>
            {!user && (
              <form>
                <h2 className="text-3xl font-semibold border-b border-gray-300 my-10 pb-4">
                  Post a comment
                </h2>
                <div className="flex gap-[5%]">
                  <Input
                    type="text"
                    className="w-1/2 outline-0 focus:border-gray-400"
                    placeholder="Name*"
                  />
                  <Input
                    type="email"
                    className="w-1/2 outline-0 focus:border-gray-400"
                    placeholder="Email*"
                  />
                </div>
                <textarea
                  placeholder="Write a comment"
                  className="w-full h-48 resize-none border-gray-300 border mt-10 p-3 outline-0 focus:border-gray-400"
                ></textarea>
                <Button size="lg" className="mt-10">Post a comment</Button>
              </form>
            )}
          </section>
        )}
        <BlogSidebar />
      </Wrapper>
    </main>
  );
};
