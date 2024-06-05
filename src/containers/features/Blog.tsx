import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";
import { icons } from "src/constants";
import { TBlog } from "src/types";
import { formDate } from "src/utils";

interface BlogProps {
  blog: TBlog;
}

export const Blog = ({ blog }: BlogProps) => {
  const [day, month, year] = formDate(new Date(blog.date)).split(" ");

  return (
    <div>
      <div className="relative">
        <img
          className="object-cover w-full h-[30rem]"
          src={blog.img[0]}
          alt={blog.title}
        />
        <div className="w-20 h-20 rounded-lg bg-orange-400 text-gray-100 flex flex-col items-center justify-center absolute top-4 left-4">
          <span className="font-semibold text-2xl leading-3">{day}</span>
          <span className="text-xl leading-3">{month}</span>
        </div>
      </div>
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
      <p className="my-6 w-3/4">{blog.text}</p>
      <Link
        to={`/blog-details/${blog._id}`}
        size="lg"
        variant="outlined"
        className="group"
      >
        Read More
        <Icon
          IconComponent={icons.readMoreArrow.icon}
          className="w-5 h-5 ml-3 text-orange-400 group-hover:text-gray-100"
        />
      </Link>
    </div>
  );
};
