import { Link } from "src/components/Link";

import { icons } from "src/constants";
import { Icon } from "src/components/Icon";
import { TBlog } from "src/types";
import { formDate } from "src/utils";

interface BlogCardProps {
  blog: TBlog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const shareLink = async (link: string) => {
    await navigator.share({
      title: "Share this site link",
      url: link,
    });
  };

  return (
    <li className="border border-white w-1/4">
      <img
        className="w-full h-60 object-cover"
        src={blog.img[0]}
        alt={blog.title}
      />
      <section className="p-6">
        <div>
          <span className="text-sm text-orange-400">
            {formDate(new Date(blog.date))}
          </span>
          <h5 className="font-semibold text-lg mt-4">{blog.title}</h5>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link variant="colored" to={`/blog-details/${blog._id}`}>
            Learn More
          </Link>
          <ul className="flex gap-2">
            <li>
              <Icon IconComponent={icons.comment.icon} />
            </li>
            <li>
              <Icon
                IconComponent={icons.share.icon}
                onClick={() => shareLink("https://foodtuck-two.vercel.app")}
              />
            </li>
          </ul>
        </div>
      </section>
    </li>
  );
};
